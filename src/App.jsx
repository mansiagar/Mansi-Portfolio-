import { useState, useEffect } from "react";
import Demo from "./Component/NavDraw";
import Navbar from "./Component/Navbar";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <Demo /> : <Navbar />}</>;
};

export default App;
