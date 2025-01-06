"use client";
import { useState } from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Freelancer",
    priceMonthly: "$19",
    priceAnnually: "$190",
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Startup",
    priceMonthly: "$29",
    priceAnnually: "$290",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceAnnually: "Custom",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    featured: true,
  },
];

export const Pricing3 = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <div className="relative isolate bg-white py-24 sm:py-32 lg:py-40">
      {/* Gradient Shape Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute left-1/2 top-0 w-[72rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 opacity-30"
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-lg font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Pricing that grows with you
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2 bg-gray-100 p-2 rounded-full">
            <button
              onClick={() => setBillingCycle("Monthly")}
              className={`px-6 py-2 text-sm font-medium rounded-full ${
                billingCycle === "Monthly"
                  ? "bg-indigo-600 text-white"
                  : "text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("Annually")}
              className={`px-6 py-2 text-sm font-medium rounded-full ${
                billingCycle === "Annually"
                  ? "bg-indigo-600 text-white"
                  : "text-black"
              }`}
            >
              Annually
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col justify-between p-8 rounded-3xl shadow-lg ${
              tier.featured
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900 border border-gray-200"
            }`}
          >
            <div>
              <h3
                className={`text-lg font-semibold ${
                  tier.featured ? "text-indigo-400" : "text-gray-900"
                }`}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline text-5xl font-bold">
                {billingCycle === "Monthly"
                  ? tier.priceMonthly
                  : tier.priceAnnually}
                {tier.priceMonthly !== "Custom" && (
                  <span className="ml-1 text-lg font-medium text-gray-500">
                    /{billingCycle.toLowerCase()}
                  </span>
                )}
              </p>
              <p className="mt-4 text-sm">{tier.description}</p>
              <ul className="mt-6 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check
                      className={`h-5 w-5 ${
                        tier.featured ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              {tier.priceMonthly === "Custom" ? (
                <a
                  href="#"
                  className="block w-full text-center rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
                >
                  Contact sales
                </a>
              ) : (
                <a
                  href="#"
                  className={`block w-full text-center rounded-lg px-4 py-2 text-sm font-semibold ${
                    tier.featured
                      ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600"
                  }`}
                >
                  Buy plan
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
