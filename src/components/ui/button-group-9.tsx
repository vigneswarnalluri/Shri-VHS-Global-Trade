import React from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, FileText } from "lucide-react";

export interface ButtonGroupItem {
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
}

interface ButtonGroup9Props {
  items?: ButtonGroupItem[];
  className?: string;
}

export const ButtonGroup9: React.FC<ButtonGroup9Props> = ({
  items,
  className = "",
}) => {
  const defaultItems: ButtonGroupItem[] = [
    {
      label: "Explore Products",
      icon: ArrowRight,
      href: "#products",
      variant: "primary",
    },
    {
      label: "Request a Quote",
      icon: FileText,
      variant: "secondary",
    },
  ];

  const actions = items || defaultItems;

  return (
    <div
      className={`inline-flex w-fit items-stretch -space-x-px rounded-full overflow-hidden shadow-md rtl:space-x-reverse ${className}`}
    >
      {actions.map((action, index) => {
        const Icon = action.icon;
        const isFirst = index === 0;
        const isLast = index === actions.length - 1;

        const isPrimary = action.variant === "primary" || (index === 0 && !action.variant);

        const baseButtonClasses = [
          "group relative inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:z-10 outline-none select-none cursor-pointer border-0",
          isFirst ? "rounded-l-full" : "",
          isLast ? "rounded-r-full" : "",
          !isFirst && !isLast ? "rounded-none" : "",
          isPrimary
            ? "bg-[#0D3B2E] text-white hover:bg-[#154a3b]"
            : "bg-white hover:bg-[#F5F4EF] text-[#0D3B2E]",
        ]
          .filter(Boolean)
          .join(" ");

        const content = (
          <>
            <span>{action.label}</span>
            {Icon && (
              <Icon
                className={`size-4 transition-transform duration-300 ${
                  isPrimary
                    ? "text-[#C59B27] group-hover:translate-x-1"
                    : "text-[#0D3B2E]/70 group-hover:text-[#C59B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }`}
              />
            )}
          </>
        );

        if (action.href) {
          return (
            <a
              key={action.label}
              href={action.href}
              onClick={action.onClick}
              className={baseButtonClasses}
            >
              {content}
            </a>
          );
        }

        return (
          <button
            key={action.label}
            type="button"
            onClick={action.onClick}
            className={baseButtonClasses}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup9;
