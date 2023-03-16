import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
const GSAPExample = () => {
  const divRef = useRef(null); 
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      switch (event.keyCode) {
        case 37:
          gsap.to(divRef.current, { duration: 0.5, x: "-=50" });
          break;
        case 38:
          gsap.to(divRef.current, { duration: 0.5, y: "-=50" });
          break;
        case 39:
          gsap.to(divRef.current, { duration: 0.5, x: "+=50" });
          break;
        case 40:
          gsap.to(divRef.current, { duration: 0.5, y: "+=50" });
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url(./src/assets/img/8bit-bg.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        ref={divRef}
        style={{
          width: 100,
          height: 150,
          backgroundImage: "url(./src/assets/img/player.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      />
    </div>
  );
};

export default GSAPExample;
