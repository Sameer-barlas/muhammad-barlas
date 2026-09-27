import { useEffect, useRef } from "react";

function FlyCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const cursor = cursorRef.current;
    let frame;
    let point = { x: -100, y: -100, angle: 0 };
    let previous = { x: 0, y: 0 };
    const render = () => { cursor.style.transform = `translate3d(${point.x + 12}px, ${point.y - 12}px, 0) rotate(${point.angle}deg)`; frame = undefined; };
    const move = (event) => {
      const deltaX = event.clientX - previous.x;
      previous = { x: event.clientX, y: event.clientY };
      point = { x: event.clientX, y: event.clientY, angle: Math.max(-18, Math.min(18, deltaX * 1.5)) };
      if (!frame) frame = window.requestAnimationFrame(render);
    };
    const press = () => cursor.classList.add("fly-cursor--pressed");
    const release = () => cursor.classList.remove("fly-cursor--pressed");
    document.documentElement.classList.add("has-fly-cursor");
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    return () => { document.documentElement.classList.remove("has-fly-cursor"); window.removeEventListener("pointermove", move); window.removeEventListener("pointerdown", press); window.removeEventListener("pointerup", release); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  return <div ref={cursorRef} className="fly-cursor" aria-hidden="true"><span className="fly-cursor__glow" /><img src="/digital-fly.svg" alt="" /></div>;
}

export default FlyCursor;
