import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { FooterMinimal } from "./components/Footer/FooterMinimal";
import { Error404 } from "./pages/Error404";
import { useEffect, useCallback } from "react";
import { ScrollToTop } from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ThemeProvider } from "./context/ThemeContext";
import { Suspense, lazy } from "react";
// import CustomCursor from './components/CustomCursor';  // if it exists

// Lazy load pages for better performance
const LazyHome = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const LazyComponents = lazy(() => import("./pages/Components").then(module => ({ default: module.Components })));
const LazyDocumentation = lazy(() => import("./pages/Documentation").then(module => ({ default: module.Documentation })));
const LazyTemplates = lazy(() => import("./pages/Templates").then(module => ({ default: module.Templates })));

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

export const App = () => {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors mouse-gradient">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<LazyHome />} />
                  <Route path="/components" element={<LazyComponents />} />
                  <Route path="/templates" element={<LazyTemplates />} />
                  <Route path="/docs" element={<LazyDocumentation />} />
                  <Route path="*" element={<Error404 />} />
                </Routes>
              </Suspense>
            </main>
            <FooterMinimal />
            <Analytics />
            <ScrollToTop />
            {/* Remove or comment out the cursor component if it exists */}
            {/* <CustomCursor /> */}
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
