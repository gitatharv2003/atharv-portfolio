import gsap from "gsap";
import { useEffect, useRef } from "react";

const ActionRipple = () => {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;

    const handlePointerDown = (event) => {
      const target = event.target.closest("a, button, [role='button']");
      if (!target) return;

      const ripple = document.createElement("span");
      ripple.className =
        "pointer-events-none fixed z-[997] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-200/80 bg-yellow-200/20";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      layer.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0.35, opacity: 0.9 },
        {
          scale: 6.5,
          opacity: 0,
          duration: 0.58,
          ease: "power3.out",
          onComplete: () => ripple.remove(),
        }
      );
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      layer.replaceChildren();
    };
  }, []);

  return <div ref={layerRef} aria-hidden="true" />;
};

export default ActionRipple;
