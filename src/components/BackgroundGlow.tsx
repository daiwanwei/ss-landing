export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute rounded-full opacity-25"
        style={{
          width: 500,
          height: 500,
          background: "var(--color-primary-start)",
          filter: "blur(120px)",
          top: -150,
          left: -100,
          animation: "orbFloat 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full opacity-25"
        style={{
          width: 400,
          height: 400,
          background: "var(--color-primary-end)",
          filter: "blur(120px)",
          bottom: -100,
          right: -100,
          animation: "orbFloat 20s ease-in-out infinite",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute rounded-full opacity-25"
        style={{
          width: 300,
          height: 300,
          background: "var(--color-accent)",
          filter: "blur(120px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "orbFloat 20s ease-in-out infinite",
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}
