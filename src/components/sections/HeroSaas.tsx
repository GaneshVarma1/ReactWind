export const HeroSaas = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section with Grid Background */}
      <div
        className="relative"
        style={{
          backgroundImage: `
                linear-gradient(to right, rgba(200, 200, 200, 0.8) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(200, 200, 200, 0.8) 1px, transparent 1px)
              `,
          backgroundSize: "24px 24px",
          backgroundPosition: "center center",
        }}
      >
        {/* Dark Mode Grid */}
        <div
          className="absolute inset-0 pointer-events-none dark:block hidden"
          style={{
            backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                `,
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
          }}
        ></div>

        {/* Radial Gradient for Dark Mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-white dark:from-gray-900 dark:to-gray-900 opacity-80 dark:opacity-90 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Navigation */}
          <nav className="flex flex-col sm:flex-row items-center justify-between py-6 space-y-4 sm:space-y-0">
            <div className="text-indigo-600 dark:text-indigo-400 text-3xl">
              $
            </div>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2"
              >
                Product
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2"
              >
                Company
              </a>
            </div>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Log in →
            </a>
          </nav>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-16">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Hiring Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 mb-6">
                <span className="hiring-badge px-4 py-2 rounded-full text-indigo-600 dark:text-indigo-400 font-medium flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse"></span>
                  <span>We're hiring</span>
                </span>
                <a
                  href="#"
                  className="sm:ml-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  See open positions →
                </a>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
                Transforming how the world builds relationships.
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt
                sunt.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="w-full sm:w-auto bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get started
                </button>
                <button className="w-full sm:w-auto text-gray-700 dark:text-gray-300 px-8 py-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center justify-center">
                  Learn more <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* Right Column - Laptop Image */}
            <div className="relative order-1 lg:order-2 -mx-4 sm:mx-0">
              <div className="transform transition-all duration-300 hover:rotate-3 hover:-translate-y-2">
                <img
                  src="https://i.ibb.co/mtL0Gf5/macos-sequoia-header-final2-removebg-preview.png"
                  alt="Application interface"
                  className="w-full h-auto max-w-xl mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSaas;
