/* ============================================================
   ROBOT CHASE — Drone cursor + static robot (scoped)
   ------------------------------------------------------------
   This module powers the interactive "drone cursor chase" ONLY
   inside the hero's right-side avatar container.

   HOW IT WORKS
   1. `initRobotChase(container)` is called from Hero.jsx with the
      container that wraps the robot.
   2. Two overlay elements are injected into that container:
        - .drone-cursor  → SVG quadcopter that follows the mouse
        - .robot-chaser  → SVG robot (STATIC, standing straight)
   3. The robot body does NOT move. Instead, a
      `requestAnimationFrame` loop LERPS the robot's HEAD and ARMS
      toward the drone's live position every frame:
        - HEAD rotates around the neck to point the FACE at the fly
        - ONE ARM (the closer one) reaches toward the fly with a
          slight elbow bend; the other arm rests relaxed
   4. When the mouse leaves, head + arms ease back to a neutral,
      relaxed resting pose with a subtle breathing animation.

   DISABLING:
   Set ENABLE_ROBOT_CHASE to false below. On touch devices or
   when prefers-reduced-motion is set, the effect is skipped and
   the robot simply stands in its idle pose.
   ============================================================ */

/* --- CONFIG FLAG -------------------------------------------------
   Turn the entire effect on/off without touching components. */
export const ENABLE_ROBOT_CHASE = true;

/* --- Tunable parameters ------------------------------------------ */
const MOVE_THROTTLE = 12;        // ms — min interval for mousemove checks

// Robot size (px). Occupies ~64% of the 560px container height.
const ROBOT_SIZE = 440;

// --- Idle (resting) pose angles (degrees) ---
const IDLE_HEAD_DEG = 0;         // face straight ahead
const IDLE_ARM_L_DEG = 30;       // left arm relaxed out to side
const IDLE_ARM_R_DEG = -30;      // right arm relaxed out to side
const IDLE_ELBOW_DEG = 0;        // elbows straight when resting

// --- Tracking / easing ---
const HEAD_LERP = 0.1;           // head eases toward target (0-1)
const ARM_LERP = 0.1;            // arm eases toward target (0-1)
const ELBOW_LERP = 0.1;          // elbow eases toward target (0-1)

// --- Clamp ranges (degrees) ---
const HEAD_CLAMP = 40;           // head rotates ±40° from forward
const ARM_CLAMP = 70;            // shoulder rotates ±70° from rest
const ELBOW_BEND = 18;           // elbow bends up to 18° when reaching

// SVG viewBox dimensions of the robot artwork.
const SVG_VW = 48;
const SVG_VH = 48;

// Shoulder pivot points in the SVG's own viewBox coordinates.
const LEFT_SHOULDER = { x: 15, y: 23 };
const RIGHT_SHOULDER = { x: 33, y: 23 };

// Head pivot point (neck) in the SVG's own viewBox coordinates.
const HEAD_PIVOT = { x: 24, y: 22 };

/* --- SVG TEMPLATES ------------------------------------------------ */

/**
 * Builds the drone (quadcopter) SVG markup string.
 * Uses the theme's purple (indigo #6366f1) and blue/cyan (#22d3ee).
 * NOTE: The drone's size & animation are correct — do NOT change.
 */
function droneSVG() {
  return `
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Propellers (rotating) -->
      <g class="drone-prop">
        <ellipse cx="11" cy="10" rx="8" ry="2.4" fill="#22d3ee" opacity="0.85"/>
        <ellipse cx="25" cy="10" rx="8" ry="2.4" fill="#22d3ee" opacity="0.85"/>
      </g>
      <g class="drone-prop">
        <ellipse cx="11" cy="26" rx="8" ry="2.4" fill="#6366f1" opacity="0.85"/>
        <ellipse cx="25" cy="26" rx="8" ry="2.4" fill="#6366f1" opacity="0.85"/>
      </g>
      <!-- Arms -->
      <line x1="11" y1="12" x2="11" y2="24" stroke="#a5b4fc" stroke-width="1.6"/>
      <line x1="25" y1="12" x2="25" y2="24" stroke="#a5b4fc" stroke-width="1.6"/>
      <!-- Center body -->
      <rect x="13.5" y="14" width="9" height="8" rx="2" fill="#6366f1"/>
      <circle cx="18" cy="18" r="2" fill="#22d3ee"/>
      <!-- Landing lights -->
      <circle cx="13.5" cy="24.5" r="1" fill="#22d3ee" opacity="0.9"/>
      <circle cx="22.5" cy="24.5" r="1" fill="#22d3ee" opacity="0.9"/>
    </svg>
  `;
}

/**
 * Builds the robot SVG markup string — a REALISTIC, detailed
 * robot standing straight, with a separate HEAD group (for face
 * tracking), two articulated ARMS (for hand tracking), and an
 * ELBOW group inside each arm (for a natural reaching bend).
 *
 * Realistic details:
 * - Metallic gradients (dark steel → light steel) on all plates
 * - Panel lines, rivets, vents, and a glowing chest core
 * - Segmented arms with elbow joints and claw-like hands
 * - Visor-style glowing eyes, jaw plate, and neck joint
 * - Armored shoulders, hip guards, and boot-like feet
 *
 * - Head is a <g class="robot-head"> rotating around the neck.
 * - Each arm is a <g class="robot-arm ..."> rotating around the
 *   shoulder; inside it, a <g class="robot-elbow ..."> rotates
 *   around the elbow for a natural bend.
 * - Rendered at ROBOT_SIZE (440px) via CSS scaling.
 */
function robotSVG() {
  return `
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Metallic gradients for realistic plating -->
        <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#a5b4fc"/>
          <stop offset="50%" stop-color="#6366f1"/>
          <stop offset="100%" stop-color="#3730a3"/>
        </linearGradient>
        <linearGradient id="steelDark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#818cf8"/>
          <stop offset="50%" stop-color="#4f46e5"/>
          <stop offset="100%" stop-color="#312e81"/>
        </linearGradient>
        <linearGradient id="steelLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#c7d2fe"/>
          <stop offset="50%" stop-color="#818cf8"/>
          <stop offset="100%" stop-color="#6366f1"/>
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#22d3ee"/>
          <stop offset="60%" stop-color="#06b6d4"/>
          <stop offset="100%" stop-color="#0891b2"/>
        </radialGradient>
        <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#67e8f9"/>
          <stop offset="100%" stop-color="#22d3ee"/>
        </radialGradient>
      </defs>

      <!-- ==================== HEAD (rotates around neck) ==================== -->
      <g class="robot-head">
        <!-- Antenna -->
        <line x1="24" y1="4.5" x2="24" y2="8" stroke="#a5b4fc" stroke-width="1.4"/>
        <circle cx="24" cy="3.5" r="2.2" fill="#22d3ee"/>
        <circle cx="24" cy="3.5" r="1" fill="#ffffff" opacity="0.8"/>

        <!-- Head main plate -->
        <rect x="15.5" y="8" width="17" height="13.5" rx="3" fill="url(#steel)"/>
        <!-- Head top highlight -->
        <rect x="15.5" y="8" width="17" height="4" rx="2" fill="url(#steelLight)" opacity="0.5"/>

        <!-- Visor / eye band -->
        <rect x="17" y="12" width="14" height="4.5" rx="2" fill="#0f172a"/>
        <!-- Glowing eyes -->
        <circle cx="20.5" cy="14.2" r="1.8" fill="url(#eyeGlow)"/>
        <circle cx="27.5" cy="14.2" r="1.8" fill="url(#eyeGlow)"/>
        <circle cx="20.5" cy="14.2" r="0.7" fill="#ffffff"/>
        <circle cx="27.5" cy="14.2" r="0.7" fill="#ffffff"/>

        <!-- Jaw / mouth plate -->
        <rect x="18.5" y="17.5" width="11" height="2.6" rx="1.3" fill="url(#steelDark)"/>
        <!-- Mouth vent lines -->
        <line x1="20" y1="18.8" x2="28" y2="18.8" stroke="#22d3ee" stroke-width="0.6" opacity="0.8"/>

        <!-- Ear / side panels -->
        <rect x="14" y="10.5" width="2" height="6" rx="1" fill="url(#steelDark)"/>
        <rect x="32" y="10.5" width="2" height="6" rx="1" fill="url(#steelDark)"/>
      </g>

      <!-- ==================== NECK ==================== -->
      <rect x="22" y="21" width="4" height="2.5" rx="1" fill="url(#steelDark)"/>

      <!-- ==================== LEFT ARM (rotates around shoulder 15,23) ==================== -->
      <g class="robot-arm robot-arm-left">
        <!-- Shoulder armor -->
        <circle cx="15" cy="23.5" r="3.2" fill="url(#steelLight)"/>
        <circle cx="15" cy="23.5" r="1.6" fill="url(#steelDark)"/>
        <!-- Upper arm -->
        <rect x="12.5" y="25" width="5" height="6.5" rx="2" fill="url(#steel)"/>
        <!-- ELBOW group (rotates around elbow joint y=31.5) -->
        <g class="robot-elbow robot-elbow-left">
          <!-- Forearm -->
          <rect x="13" y="31.5" width="4" height="5" rx="1.5" fill="url(#steelDark)"/>
          <!-- Claw hand -->
          <path d="M11 38.5 L13 36.5 L15 38.5 L17 36.5 L19 38.5 L17 40 L13 40 Z" fill="url(#steelLight)"/>
          <circle cx="15" cy="39" r="1.2" fill="#22d3ee"/>
        </g>
      </g>

      <!-- ==================== RIGHT ARM (rotates around shoulder 33,23) ==================== -->
      <g class="robot-arm robot-arm-right">
        <!-- Shoulder armor -->
        <circle cx="33" cy="23.5" r="3.2" fill="url(#steelLight)"/>
        <circle cx="33" cy="23.5" r="1.6" fill="url(#steelDark)"/>
        <!-- Upper arm -->
        <rect x="30.5" y="25" width="5" height="6.5" rx="2" fill="url(#steel)"/>
        <!-- ELBOW group (rotates around elbow joint y=31.5) -->
        <g class="robot-elbow robot-elbow-right">
          <!-- Forearm -->
          <rect x="31" y="31.5" width="4" height="5" rx="1.5" fill="url(#steelDark)"/>
          <!-- Claw hand -->
          <path d="M29 38.5 L31 36.5 L33 38.5 L35 36.5 L37 38.5 L35 40 L31 40 Z" fill="url(#steelLight)"/>
          <circle cx="33" cy="39" r="1.2" fill="#22d3ee"/>
        </g>
      </g>

      <!-- ==================== BODY (static) ==================== -->
      <!-- Torso main plate -->
      <rect x="16.5" y="22.5" width="15" height="11" rx="3" fill="url(#steel)"/>
      <!-- Torso highlight -->
      <rect x="16.5" y="22.5" width="15" height="3.5" rx="2" fill="url(#steelLight)" opacity="0.5"/>
      <!-- Chest core (glowing) -->
      <circle cx="24" cy="27" r="2.6" fill="url(#coreGlow)"/>
      <circle cx="24" cy="27" r="1.2" fill="#ffffff" opacity="0.7"/>
      <!-- Chest panel lines -->
      <line x1="19" y1="30" x2="29" y2="30" stroke="#3730a3" stroke-width="0.6" opacity="0.6"/>
      <line x1="19" y1="31.5" x2="29" y2="31.5" stroke="#3730a3" stroke-width="0.6" opacity="0.6"/>
      <!-- Rivets -->
      <circle cx="18.5" cy="24" r="0.5" fill="#c7d2fe"/>
      <circle cx="29.5" cy="24" r="0.5" fill="#c7d2fe"/>

      <!-- ==================== HIP ==================== -->
      <rect x="18" y="33" width="12" height="2" rx="1" fill="url(#steelDark)"/>

      <!-- ==================== LEGS (static) ==================== -->
      <!-- Left leg -->
      <rect x="18.5" y="34.5" width="4.5" height="5" rx="1.5" fill="url(#steel)"/>
      <circle cx="20.7" cy="39.5" r="1.4" fill="url(#steelLight)"/>
      <!-- Right leg -->
      <rect x="25" y="34.5" width="4.5" height="5" rx="1.5" fill="url(#steel)"/>
      <circle cx="27.3" cy="39.5" r="1.4" fill="url(#steelLight)"/>

      <!-- ==================== FEET (static, boot-like) ==================== -->
      <path d="M17 40 L17 42.5 L24 42.5 L24 40 Z" fill="url(#steelDark)"/>
      <path d="M24 40 L24 42.5 L31 42.5 L31 40 Z" fill="url(#steelDark)"/>
      <!-- Feet glow strips -->
      <rect x="18" y="41.5" width="5" height="0.8" rx="0.4" fill="#22d3ee" opacity="0.8"/>
      <rect x="25" y="41.5" width="5" height="0.8" rx="0.4" fill="#22d3ee" opacity="0.8"/>
    </svg>
  `;
}

/* --- HELPERS ------------------------------------------------------ */

/**
 * Returns true when the device has a coarse pointer (touch) —
 * in that case the effect is not applicable.
 */
function isTouchDevice() {
  return window.matchMedia("(pointer: coarse)").matches;
}

/**
 * Returns true when the user prefers reduced motion.
 */
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Linear interpolation between two values.
 */
function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Clamps a value between min and max (inclusive).
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/* --- MAIN INIT ---------------------------------------------------- */

/**
 * Initializes the drone cursor + static robot inside the given
 * container element. Returns a cleanup function so React effects
 * can dispose of everything cleanly.
 *
 * @param {HTMLElement} container - the node that wraps the robot
 */
export function initRobotChase(container) {
  /* Bail out early if feature is disabled, container missing,
     touch device, or reduced motion is preferred. */
  if (!ENABLE_ROBOT_CHASE) return () => {};
  if (!container) return () => {};
  if (isTouchDevice() || prefersReducedMotion()) return () => {};

  /* --- Create overlay elements ----------------------------------- */

  // Drone cursor overlay
  const drone = document.createElement("div");
  drone.className = "drone-cursor";
  drone.innerHTML = droneSVG();
  container.appendChild(drone);

  // Robot overlay — STATIC, standing straight in the center.
  const robot = document.createElement("div");
  robot.className = "robot-chaser idle"; // starts in idle (breathing) pose
  robot.innerHTML = robotSVG();
  container.appendChild(robot);

  // Grab the articulated head, arm, and elbow groups inside the SVG.
  const head = robot.querySelector(".robot-head");
  const armLeft = robot.querySelector(".robot-arm-left");
  const armRight = robot.querySelector(".robot-arm-right");
  const elbowLeft = robot.querySelector(".robot-elbow-left");
  const elbowRight = robot.querySelector(".robot-elbow-right");

  /* --- State ------------------------------------------------------ */

  // Mouse position relative to the container (robot-local coords)
  let targetX = 0;
  let targetY = 0;

  // Throttle timers
  let lastMoveTime = 0;

  // Whether the mouse is inside the container
  let mouseInside = false;

  // Animation loop handle
  let rafId = null;

  // Current (lerped) joint angles — start at the idle pose.
  let headAngle = IDLE_HEAD_DEG;
  let armLAngle = IDLE_ARM_L_DEG;
  let armRAngle = IDLE_ARM_R_DEG;
  let elbowLAngle = IDLE_ELBOW_DEG;
  let elbowRAngle = IDLE_ELBOW_DEG;

  /* --- Geometry --------------------------------------------------- */

  // The container = the robot's coordinate space.
  let containerRect = container.getBoundingClientRect();

  /* --- Sizing ------------------------------------------------ */

  const DRONE_W = 36;
  const DRONE_H = 36;
  const ROBOT_W = ROBOT_SIZE;
  const ROBOT_H = ROBOT_SIZE;

  // Scale factors: viewBox units → rendered pixels.
  const SCALE_X = ROBOT_W / SVG_VW;
  const SCALE_Y = ROBOT_H / SVG_VH;

  // Robot is static — position it centered in the container.
  const robotX = (containerRect.width - ROBOT_W) / 2;
  const robotY = (containerRect.height - ROBOT_H) / 2;

  /* --- Refresh geometry (called on scroll/resize/mousemove) ------- */

  function refreshRects() {
    containerRect = container.getBoundingClientRect();
  }

  /* --- Positioning helpers ---------------------------------------- */

  function setPosition(el, x, y) {
    el.style.transform = `translate(${x}px, ${y}px)`;
  }

  /** Returns a point's world position (container-local px) for the
   *  given viewBox point. */
  function worldPos(point) {
    return {
      x: robotX + point.x * SCALE_X,
      y: robotY + point.y * SCALE_Y,
    };
  }

  /** Computes the world angle (radians → degrees) from a point
   *  to the drone target using atan2. */
  function angleToTarget(point) {
    return (Math.atan2(targetY - point.y, targetX - point.x) * 180) / Math.PI;
  }

  /** Applies the current lerped joint angles to the SVG groups. */
  function applyPose() {
    if (head) head.style.setProperty("--head-rot", `${headAngle}deg`);
    if (armLeft) armLeft.style.setProperty("--arm-l-rot", `${armLAngle}deg`);
    if (armRight) armRight.style.setProperty("--arm-r-rot", `${armRAngle}deg`);
    if (elbowLeft) elbowLeft.style.setProperty("--elbow-l-rot", `${elbowLAngle}deg`);
    if (elbowRight) elbowRight.style.setProperty("--elbow-r-rot", `${elbowRAngle}deg`);
  }

  /**
   * Updates the lerped joint angles toward their targets.
   * Called every animation frame while the mouse is inside.
   *
   * HEAD: eases toward the angle from the neck to the drone,
   *   clamped to ±HEAD_CLAMP from forward.
   * ARMS: only the arm CLOSER to the drone reaches toward it
   *   (clamped to ±ARM_CLAMP); the other arm eases back to rest.
   * ELBOW: the reaching arm's elbow bends slightly (ELBOW_BEND)
   *   for a natural reaching look; the resting arm's elbow stays
   *   straight.
   */
  function updateTracking() {
    // --- Head tracking ---
    const neck = worldPos(HEAD_PIVOT);
    const headTarget = clamp(angleToTarget(neck) - 90, -HEAD_CLAMP, HEAD_CLAMP);
    headAngle = lerp(headAngle, headTarget, HEAD_LERP);

    // --- Determine which arm is closer to the drone ---
    const leftShoulder = worldPos(LEFT_SHOULDER);
    const rightShoulder = worldPos(RIGHT_SHOULDER);
    const leftDist = Math.hypot(targetX - leftShoulder.x, targetY - leftShoulder.y);
    const rightDist = Math.hypot(targetX - rightShoulder.x, targetY - rightShoulder.y);
    const useLeft = leftDist < rightDist;

    // --- Arm tracking (only the closer arm reaches) ---
    const reachShoulder = useLeft ? leftShoulder : rightShoulder;
    const reachTarget = clamp(angleToTarget(reachShoulder) - 90, -ARM_CLAMP, ARM_CLAMP);

    if (useLeft) {
      armLAngle = lerp(armLAngle, reachTarget, ARM_LERP);
      armRAngle = lerp(armRAngle, IDLE_ARM_R_DEG, ARM_LERP);
      elbowLAngle = lerp(elbowLAngle, ELBOW_BEND, ELBOW_LERP);
      elbowRAngle = lerp(elbowRAngle, IDLE_ELBOW_DEG, ELBOW_LERP);
    } else {
      armRAngle = lerp(armRAngle, reachTarget, ARM_LERP);
      armLAngle = lerp(armLAngle, IDLE_ARM_L_DEG, ARM_LERP);
      elbowRAngle = lerp(elbowRAngle, ELBOW_BEND, ELBOW_LERP);
      elbowLAngle = lerp(elbowLAngle, IDLE_ELBOW_DEG, ELBOW_LERP);
    }

    applyPose();
  }

  /** Eases head + arms back to the neutral, relaxed idle pose. */
  function resetToIdle() {
    headAngle = IDLE_HEAD_DEG;
    armLAngle = IDLE_ARM_L_DEG;
    armRAngle = IDLE_ARM_R_DEG;
    elbowLAngle = IDLE_ELBOW_DEG;
    elbowRAngle = IDLE_ELBOW_DEG;
    applyPose();
    robot.classList.add("idle"); // enable breathing animation
  }

  /* --- Initial idle pose ------------------------------------------ */

  // Position the static robot centered in the container.
  setPosition(robot, robotX, robotY);
  // Head + arms start at the relaxed idle pose.
  resetToIdle();

  /* --- Mouse handlers (scoped to this container) ------------------- */

  function handleMouseMove(e) {
    const now = performance.now();
    // Throttle: ignore moves closer than MOVE_THROTTLE ms apart.
    if (now - lastMoveTime < MOVE_THROTTLE) return;
    lastMoveTime = now;

    // Update geometry in case of layout shifts/resizes/scroll.
    refreshRects();

    // Convert page coords to container-local coords.
    targetX = e.clientX - containerRect.left;
    targetY = e.clientY - containerRect.top;

    mouseInside = true;
    robot.classList.remove("idle"); // stop breathing, start tracking

    // Place the drone cursor precisely under the mouse.
    setPosition(drone, targetX - DRONE_W / 2, targetY - DRONE_H / 2);
  }

  function handleMouseLeave() {
    // Restore default cursor + let the robot return to idle pose.
    mouseInside = false;
    resetToIdle();
  }

  /* --- Animation loop (requestAnimationFrame, NOT setInterval) ----- */

  function tick() {
    if (!mouseInside) {
      // Idle — nothing to track. Keep looping so entering the
      // container mid-frame still works; skip heavy math.
      rafId = requestAnimationFrame(tick);
      return;
    }

    // The robot body is STATIC — only the head + hands track the fly.
    updateTracking();

    rafId = requestAnimationFrame(tick);
  }

  /* --- Resize handler (keeps geometry fresh) ----------------------- */

  function handleResize() {
    refreshRects();
  }

  /* --- Wire everything up ------------------------------------------ */

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
  window.addEventListener("resize", handleResize);
  rafId = requestAnimationFrame(tick);

  /* --- Cleanup ----------------------------------------------------- */

  return function cleanup() {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
    window.removeEventListener("resize", handleResize);
    if (rafId) cancelAnimationFrame(rafId);
    if (drone.parentNode) drone.parentNode.removeChild(drone);
    if (robot.parentNode) robot.parentNode.removeChild(robot);
  };
}
