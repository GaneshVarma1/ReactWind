import { NavLink, useNavigate } from "react-router-dom";
import { NavItem } from "../../types";

const navItems: NavItem[] = [
  { title: "Components", href: "/components" },
  { title: "Templates", href: "/templates" },
  { title: "Documentation", href: "/docs" },
  { title: "GitHub", href: "https://github.com/GaneshVarma1" },
];

export const Navigation = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      // First navigate to the components page if we're not already there
      navigate('/');
      
      // Then scroll to the section after a small delay to ensure the page is loaded
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav className="hidden md:flex flex-1 items-center justify-center -ml-24">
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          item.href.startsWith('#') ? (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm font-medium transition-colors hover:text-primary-500 text-gray-300"
            >
              {item.title}
            </a>
          ) : (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary-500 ${
                  isActive ? "text-primary-500" : "text-gray-300"
                }`
              }
            >
              {item.title}
            </NavLink>
          )
        ))}
      </div>
    </nav>
  );
};
