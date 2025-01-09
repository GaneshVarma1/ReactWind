type LogoProps = {
  src: string;
  alt: string;
};

function Logo({ src, alt }: LogoProps) {
  if (!src) return null;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="max-h-12 w-auto object-contain dark:invert dark:brightness-0 dark:contrast-200"
    />
  );
}

export default function LogoSlider() {
  const logos = [
    "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
  ];

  const repeatedLogos = [...Array(2)].flatMap(() => logos);

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-900 dark:text-white mb-10">
          Trusted by
        </h2>

        {/* Slider 1: Left to Right */}
        <div
          className="relative flex overflow-hidden"
          aria-label="Trusted logos slider"
        >
          <div className="flex space-x-8 animate-marquee">
            {repeatedLogos.map((src, index) => (
              <Logo
                key={`slider1-${index}`}
                src={src}
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slider 2: Right to Left */}
        <div
          className="relative flex overflow-hidden mt-10"
          aria-label="Trusted logos slider"
        >
          <div className="flex space-x-8 animate-marquee-reverse">
            {repeatedLogos.map((src, index) => (
              <Logo
                key={`slider2-${index}`}
                src={src}
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
