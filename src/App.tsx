import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { FooterMinimal } from "./components/Footer/FooterMinimal";
import { Home } from "./pages/Home";
import { Components } from "./pages/Components";
import { Documentation } from "./pages/Documentation";
import { Error404 } from "./pages/Error404";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors mouse-gradient">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <FooterMinimal />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
