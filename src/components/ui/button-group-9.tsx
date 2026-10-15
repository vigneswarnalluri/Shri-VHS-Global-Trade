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
      href: "#products",
      variant: "primary",
    },
    {
      label: "Request a Quote",
      variant: "secondary",
    },
  ];

  const actions = items || defaultItems;

  return (
    <div
      className={`inline-flex w-fit items-stretch -space-x-px rounded-none overflow-hidden shadow-md rtl:space-x-reverse ${className}`}
    >
      {actions.map((action, index) => {
        const Icon = action.icon;
        const isPrimary = action.variant === "primary" || (index === 0 && !action.variant);

        const baseButtonClasses = isPrimary
          ? "btn-geometric-wipe px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm gap-2 rounded-none"
          : "btn-geometric-wipe-light px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm gap-2 rounded-none bg-white text-[#0D3B2E] border-[#C59B27]";

        const content = (
          <>
            <span>{action.label}</span>
            {Icon && (
              <Icon
                className="btn-icon size-4 text-[#C59B27]"
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
