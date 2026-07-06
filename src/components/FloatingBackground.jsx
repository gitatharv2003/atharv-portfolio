import { lazy, Suspense } from "react";
import battlefield from "../assets/battlefield-bg.png";

const CinematicBattlefield = lazy(() => import("./CinematicBattlefield"));

const FloatingBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <img
        src={battlefield}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(250,204,21,0.18),transparent_22%),linear-gradient(90deg,rgba(6,6,6,0.92),rgba(6,6,6,0.52)_42%,rgba(6,6,6,0.9)),linear-gradient(180deg,rgba(6,6,6,0.12),#060606_86%)]" />
      <Suspense fallback={null}>
        <CinematicBattlefield />
      </Suspense>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-35" />
    </div>
  );
};

export default FloatingBackground;
