import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import schoolImage from "../Assets/images/School.png";

export default function PageTransitionOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .transition-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(5px);
          animation: fadeOut 0.3s ease 1s forwards;
        }

       .transition-img {
  width: 320px;
  height: 320px;
  object-fit: contain;
  animation: popIn 0.3s ease-out forwards, spinOnce 1s ease-in-out 0.3s forwards;
}
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes spinOnce {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }

        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>

      <div className="transition-overlay">
        <img className="transition-img" src={schoolImage} alt="Loading" />
      </div>
    </>
  );
}