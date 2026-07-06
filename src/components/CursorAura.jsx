import gsap from "gsap";
import { useEffect, useRef } from "react";

const CursorAura = () => {
  const auraRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const aura = auraRef.current;
    const dot = dotRef.current;
    if (!aura || !dot || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const moveAuraX = gsap.quickTo(aura, "x", { duration: 0.42, ease: "power3.out" });
    const moveAuraY = gsap.quickTo(aura, "y", { duration: 0.42, ease: "power3.out" });
    const moveDotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" });

    const handleMove = (event) => {
      moveAuraX(event.clientX);
      moveAuraY(event.clientY);
      moveDotX(event.clientX);
      moveDotY(event.clientY);
    };

    const handleOver = (event) => {
      if (!event.target.closest("a, button, [role='button']")) return;
      gsap.to(aura, { scale: 1.75, duration: 0.28, ease: "power2.out" });
      gsap.to(dot, { scale: 0.45, duration: 0.2, ease: "power2.out" });
    };

    const handleOut = (event) => {
      if (!event.target.closest("a, button, [role='button']")) return;
      gsap.to(aura, { scale: 1, duration: 0.28, ease: "power2.out" });
      gsap.to(dot, { scale: 1, duration: 0.2, ease: "power2.out" });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    window.addEventListener("pointerout", handleOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerout", handleOut);
    };
  }, []);

  return (
    <>
      <div
        ref={auraRef}
        className="pointer-events-none fixed left-0 top-0 z-[998] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-200/30 bg-yellow-300/10 mix-blend-screen blur-[1px] lg:block"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200 lg:block"
      />
    </>
  );
};

export default CursorAura;
