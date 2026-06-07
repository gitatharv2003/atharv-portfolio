const FloatingBackground = () => {
  return (
    <>
      <div
        className="
        fixed
        top-0
        left-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-yellow-400/10
        blur-[150px]
        -z-10
        "
      />

      <div
        className="
        fixed
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-yellow-400/10
        blur-[150px]
        -z-10
        "
      />
    </>
  );
};

export default FloatingBackground;