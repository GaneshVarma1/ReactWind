import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center px-4 py-2 -mx-4 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
      onClick={() => (window.location.href = "/")}
    >
      <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
        ReactWind
      </span>
    </Link>
  );
};
