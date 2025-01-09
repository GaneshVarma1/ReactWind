"use client";

import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

type Frequency = "monthly" | "annually";
type TierName = "Free" | "Pro" | "Ultimate";

const frequencies: { value: Frequency; label: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "annually", label: "Annually" },
];

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    href: "#",
    featured: false,
    description: "Get started with limited access to job applications.",
    price: { monthly: "$0", annually: "$0" },
    mainFeatures: [
      "Limited job applications",
      "Basic AI matching",
      "Upload and edit your resume",
    ],
  },
  {
    name: "Ultimate",
    id: "tier-ultimate",
    href: "#",
    featured: true,
    description: "Unlimited applications with personalized AI-driven support.",
    price: { monthly: "$60", annually: "$576" },
    mainFeatures: [
      "Unlimited job applications",
      "AI writes resume and cover letter",
      "Advanced AI job matching with 99% accuracy",
      "Personalized email alerts for job matches",
      "24/7 customer support",
      "Personalized job search support",
    ],
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    featured: false,
    description: "Unlock more applications and let AI craft your resume.",
    price: { monthly: "$30", annually: "$288" },
    mainFeatures: [
      "Apply to a higher number of jobs",
      "AI writes your resume",
      "Basic AI job matching",
      "Custom job alerts",
    ],
  },
];

const sections = [
  {
    name: "Features",
    features: [
      {
        name: "Job Applications",
        tiers: {
          Free: "Limited",
          Pro: "Increased limit",
          Ultimate: "Unlimited",
        },
      },
      {
        name: "AI-Generated Resume",
        tiers: { Free: false, Pro: true, Ultimate: true },
      },
      {
        name: "AI-Generated Cover Letter",
        tiers: { Free: false, Pro: false, Ultimate: true },
      },
      {
        name: "Job Matching Accuracy",
        tiers: { Free: "Basic", Pro: "Standard", Ultimate: "99% accuracy" },
      },
      {
        name: "Personalized Email Alerts",
        tiers: { Free: false, Pro: false, Ultimate: true },
      },
      {
        name: "24/7 Customer Support",
        tiers: { Free: false, Pro: true, Ultimate: true },
      },
    ],
  },
  {
    name: "Other Perks",
    features: [
      {
        name: "Personalized Job Search Support",
        tiers: { Free: false, Pro: false, Ultimate: true },
      },
      {
        name: "Custom Job Alerts",
        tiers: { Free: false, Pro: true, Ultimate: true },
      },
      {
        name: "Mobile and Web Access",
        tiers: { Free: true, Pro: true, Ultimate: true },
      },
      {
        name: "Priority Support",
        tiers: { Free: false, Pro: true, Ultimate: true },
      },
      {
        name: "Advanced Analytics Dashboard",
        tiers: { Free: false, Pro: true, Ultimate: true },
      },
      {
        name: "Interview Preparation Resources",
        tiers: { Free: false, Pro: true, Ultimate: true },
      },
      {
        name: "Dedicated Account Manager",
        tiers: { Free: false, Pro: false, Ultimate: true },
      },
      {
        name: "Weekly Progress Reports",
        tiers: { Free: false, Pro: true, Ultimate: true },
      },
      {
        name: "Networking Opportunities",
        tiers: { Free: false, Pro: true, Ultimate: true },
      },
      {
        name: "Early Access to New Features",
        tiers: { Free: false, Pro: false, Ultimate: true },
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Pricing3big = () => {
  const [frequency, setFrequency] = useState<{
    value: Frequency;
    label: string;
  }>(frequencies[0]);

  return (
    <div className="isolate overflow-hidden">
      <div className="flow-root bg-gray-900 dark:bg-gray-800 pb-16 pt-24 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10">
            <h2 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white dark:text-gray-100">
              Simple pricing, no commitment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60 dark:text-gray-400">
              Choose the plan that fits your career goals. Start with our free
              plan, or upgrade for more powerful features.
            </p>
            <div className="mt-16 flex justify-center">
              <fieldset aria-label="Payment frequency">
                <RadioGroup
                  value={frequency}
                  onChange={setFrequency}
                  className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 dark:bg-gray-700 p-1 text-center text-xs font-semibold leading-5 text-white"
                >
                  {frequencies.map((option) => (
                    <Radio
                      key={option.value}
                      value={option}
                      className="cursor-pointer rounded-full px-2.5 py-1 data-[checked]:bg-indigo-500"
                    >
                      {option.label}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
          </div>
          <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
            <svg
              viewBox="0 0 1208 1024"
              aria-hidden="true"
              className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
            >
              <ellipse
                cx={604}
                cy={512}
                rx={604}
                ry={512}
                fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
              />
              <defs>
                <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#7775D9" />
                </radialGradient>
              </defs>
            </svg>
            <div
              aria-hidden="true"
              className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
            />
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "z-10 bg-white dark:bg-gray-900 shadow-xl ring-1 ring-gray-900/10 dark:ring-white/20"
                    : "bg-gray-800/80 dark:bg-gray-700/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0",
                  "relative rounded-2xl"
                )}
              >
                <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-white",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div className="mt-2 flex items-center gap-x-4">
                      <p
                        className={classNames(
                          tier.featured
                            ? "text-gray-900 dark:text-gray-100"
                            : "text-white",
                          "text-4xl font-bold tracking-tight"
                        )}
                      >
                        {tier.price[frequency.value]}
                      </p>
                      <div className="text-sm leading-5">
                        <p
                          className={
                            tier.featured
                              ? "text-gray-900 dark:text-gray-100"
                              : "text-white"
                          }
                        >
                          USD
                        </p>
                        <p
                          className={
                            tier.featured
                              ? "text-gray-500 dark:text-gray-400"
                              : "text-gray-400"
                          }
                        >{`Billed ${frequency.value}`}</p>
                      </div>
                    </div>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.featured
                          ? "bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
                          : "bg-white/10 hover:bg-white/20 focus-visible:outline-white",
                        "rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      )}
                    >
                      Buy this plan
                    </a>
                  </div>
                  <div className="mt-8 flow-root sm:mt-10">
                    <ul
                      role="list"
                      className={classNames(
                        tier.featured
                          ? "divide-gray-900/5 border-gray-900/5 text-gray-600 dark:text-gray-400"
                          : "divide-white/5 border-white/5 text-white",
                        "-my-2 divide-y border-t text-sm leading-6 lg:border-t-0"
                      )}
                    >
                      {tier.mainFeatures.map((mainFeature) => (
                        <li key={mainFeature} className="flex gap-x-3 py-2">
                          <CheckIcon
                            aria-hidden="true"
                            className={classNames(
                              tier.featured
                                ? "text-indigo-600"
                                : "text-gray-500",
                              "h-6 w-5 flex-none"
                            )}
                          />
                          {mainFeature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 dark:bg-gray-900 lg:pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          {/* Feature comparison (up to lg) */}
          <section
            aria-labelledby="mobile-comparison-heading"
            className="lg:hidden"
          >
            <h2 id="mobile-comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mx-auto max-w-2xl space-y-16">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="border-t border-gray-900/10 dark:border-gray-700"
                >
                  <div
                    className={classNames(
                      tier.featured
                        ? "border-indigo-600"
                        : "border-transparent",
                      "-mt-px w-72 border-t-2 pt-10 md:w-80"
                    )}
                  >
                    <h3
                      className={classNames(
                        tier.featured
                          ? "text-indigo-600"
                          : "text-gray-900 dark:text-gray-100",
                        "text-sm font-semibold leading-6"
                      )}
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mt-10 space-y-10">
                    {sections.map((section) => (
                      <div key={section.name}>
                        <h4 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                          {section.name}
                        </h4>
                        <div className="relative mt-6">
                          {/* Fake card background */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white dark:bg-gray-800 shadow-sm sm:block"
                          />

                          <div
                            className={classNames(
                              tier.featured
                                ? "ring-2 ring-indigo-600"
                                : "ring-1 ring-gray-900/10 dark:ring-gray-700",
                              "relative rounded-lg bg-white dark:bg-gray-800 shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0"
                            )}
                          >
                            <dl className="divide-y divide-gray-200 dark:divide-gray-700 text-sm leading-6">
                              {section.features.map((feature) => (
                                <div
                                  key={feature.name}
                                  className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                >
                                  <dt className="pr-4 text-gray-600 dark:text-gray-400">
                                    {feature.name}
                                  </dt>
                                  <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                    {typeof feature.tiers[
                                      tier.name as TierName
                                    ] === "string" ? (
                                      <span
                                        className={
                                          tier.featured
                                            ? "font-semibold text-indigo-600"
                                            : "text-gray-900 dark:text-gray-100"
                                        }
                                      >
                                        {feature.tiers[tier.name as TierName]}
                                      </span>
                                    ) : (
                                      <>
                                        {feature.tiers[
                                          tier.name as TierName
                                        ] === true ? (
                                          <CheckIcon
                                            aria-hidden="true"
                                            className="mx-auto h-5 w-5 text-indigo-600"
                                          />
                                        ) : (
                                          <XMarkIcon
                                            aria-hidden="true"
                                            className="mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                                          />
                                        )}

                                        <span className="sr-only">
                                          {feature.tiers[
                                            tier.name as TierName
                                          ] === true
                                            ? "Yes"
                                            : "No"}
                                        </span>
                                      </>
                                    )}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>

                          {/* Fake card border */}
                          <div
                            aria-hidden="true"
                            className={classNames(
                              tier.featured
                                ? "ring-2 ring-indigo-600"
                                : "ring-1 ring-gray-900/10 dark:ring-gray-700",
                              "pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature comparison (lg+) */}
          <section
            aria-labelledby="comparison-heading"
            className="hidden lg:block"
          >
            <h2 id="comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 dark:border-gray-700 before:block">
              {tiers.map((tier) => (
                <div key={tier.id} aria-hidden="true" className="-mt-px">
                  <div
                    className={classNames(
                      tier.featured
                        ? "border-indigo-600"
                        : "border-transparent",
                      "border-t-2 pt-10"
                    )}
                  >
                    <p
                      className={classNames(
                        tier.featured
                          ? "text-indigo-600"
                          : "text-gray-900 dark:text-gray-100",
                        "text-sm font-semibold leading-6"
                      )}
                    >
                      {tier.name}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {tier.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="-mt-6 space-y-16">
              {sections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                    {section.name}
                  </h3>
                  <div className="relative -mx-8 mt-10">
                    {/* Fake card backgrounds */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                    >
                      <div className="h-full w-full rounded-lg bg-white dark:bg-gray-800 shadow-sm" />
                      <div className="h-full w-full rounded-lg bg-white dark:bg-gray-800 shadow-sm" />
                      <div className="h-full w-full rounded-lg bg-white dark:bg-gray-800 shadow-sm" />
                    </div>

                    <table className="relative w-full border-separate border-spacing-x-8">
                      <thead>
                        <tr className="text-left">
                          <th scope="col">
                            <span className="sr-only">Feature</span>
                          </th>
                          {tiers.map((tier) => (
                            <th key={tier.id} scope="col">
                              <span className="sr-only">{tier.name} tier</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.features.map((feature, featureIdx) => (
                          <tr key={feature.name}>
                            <th
                              scope="row"
                              className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900 dark:text-gray-100"
                            >
                              {feature.name}
                              {featureIdx !== section.features.length - 1 ? (
                                <div className="absolute inset-x-8 mt-3 h-px bg-gray-200 dark:bg-gray-700" />
                              ) : null}
                            </th>
                            {tiers.map((tier) => (
                              <td
                                key={tier.id}
                                className="relative w-1/4 px-4 py-0 text-center"
                              >
                                <span className="relative h-full w-full py-3">
                                  {typeof feature.tiers[
                                    tier.name as TierName
                                  ] === "string" ? (
                                    <span
                                      className={classNames(
                                        tier.featured
                                          ? "font-semibold text-indigo-600"
                                          : "text-gray-900 dark:text-gray-100",
                                        "text-sm leading-6"
                                      )}
                                    >
                                      {feature.tiers[tier.name as TierName]}
                                    </span>
                                  ) : (
                                    <>
                                      {feature.tiers[tier.name as TierName] ===
                                      true ? (
                                        <CheckIcon
                                          aria-hidden="true"
                                          className="mx-auto h-5 w-5 text-indigo-600"
                                        />
                                      ) : (
                                        <XMarkIcon
                                          aria-hidden="true"
                                          className="mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                                        />
                                      )}

                                      <span className="sr-only">
                                        {feature.tiers[
                                          tier.name as TierName
                                        ] === true
                                          ? "Yes"
                                          : "No"}
                                      </span>
                                    </>
                                  )}
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Fake card borders */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                    >
                      {tiers.map((tier) => (
                        <div
                          key={tier.id}
                          className={classNames(
                            tier.featured
                              ? "ring-2 ring-indigo-600"
                              : "ring-1 ring-gray-900/10 dark:ring-gray-700",
                            "rounded-lg"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
