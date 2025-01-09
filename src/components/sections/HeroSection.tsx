import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <p className="w-8 h-8 text-indigo-600">💻</p>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Product
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Company
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Log in →
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-white">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
                {/* Text Content */}
                <div className="sm:text-center lg:text-left lg:col-span-6 flex flex-col justify-center">
                  <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                    We're changing the way people connect
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non
                    deserunt sunt.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-xl shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 hover:text-gray-900 md:py-4 md:text-lg md:px-10"
                      >
                        Live demo →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image Grid */}
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
                    <div className="relative grid grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div className="relative h-64 overflow-hidden rounded-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="Team collaboration"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative h-80 overflow-hidden rounded-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="Office workspace"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6 mt-12">
                        <div className="relative h-80 overflow-hidden rounded-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="Team meeting"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative h-64 overflow-hidden rounded-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2049&q=80"
                            alt="People working"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
