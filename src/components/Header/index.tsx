import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/80 backdrop-blur-xl border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />
          <div className="flex items-center space-x-4">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};