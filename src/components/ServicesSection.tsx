import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils/helper";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Development",
    id: "development",
    href: "#",
    description:
      "Customizable and scalable web and software development for your needs",
    features: [
      "Website Development",
      "Mobile App Development",
      "E-commerce Development",
      "Search Engine Optimization",
    ],
    isEnterprise: false,
  },
  {
    name: "Solutions",
    id: "tier-startup",
    href: "#",
    description: "Software that scale up your business rapidly",
    features: [
      "Ticket Management System",
      "Learning Management System",
      "Attendant Management System",
      "Human Resource Management System",
      "Customer Support Management System",
    ],
    isEnterprise: true,
  },
  {
    name: "Consulting",
    id: "tier-enterprise",
    href: "#",
    description: "Dedicated consulting for your business",
    features: [
      "Architecture and design",
      "Project planning and management",
      "Requirements gathering and analysis",
      "Technology assessment and selection",
      "Maintenance and support",
    ],
    isEnterprise: false,
  },
];

export default function ServicesSection() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-gray-900 pt-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400 dark:text-gray-100">
            Services
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            Business services to fit all sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Select an service with top features to engage your audience, build
          customer loyalty, and boost sales, offered by our consulting and
          development services.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.isEnterprise
                  ? "bg-white/5 ring-2 ring-indigo-500"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-white"
                >
                  {tier.name}
                </h3>
                {tier.isEnterprise ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Enterprise
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {tier.description}
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-white"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
