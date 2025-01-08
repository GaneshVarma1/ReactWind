type LogoProps = {
  src: string;
  alt: string;
};

function Logo({ src, alt }: LogoProps) {
  return <img src={src} alt={alt} className="max-h-12 w-auto object-contain" />;
}

export default function OppositeDirectionSliders() {
  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-900 mb-10">
          Trusted by thousands of users
        </h2>
        {/* Slider 1: Left to Right */}
        <div className="relative flex overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
            />
          </div>
        </div>

        {/* Slider 2: Right to Left */}
        <div className="relative flex overflow-hidden mt-10">
          <div className="flex space-x-8 animate-marquee-reverse">
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
            />
            <Logo
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
