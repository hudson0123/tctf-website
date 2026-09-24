import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("splash-shown")) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("splash-shown", "1");
    const timer = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash-overlay">
      <img
        src="/logo.png"
        alt="TCTF Logo"
        className="splash-logo"
      />
    </div>
  );
}
