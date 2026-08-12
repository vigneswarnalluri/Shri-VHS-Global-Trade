import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = "left",
  theme = "light",
  className = ""
}) => {
  const isDark = theme === "dark";
  const alignClasses = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <div className={`${alignClasses} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
          <span className={`text-xs uppercase tracking-widest font-semibold ${
            isDark ? "text-[#C59B27]" : "text-[#C59B27]"
          }`}>
            {badge}
          </span>
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight leading-tight ${
        isDark ? "text-white" : "text-[#0F1F1A]"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${
          isDark ? "text-gray-300" : "text-[#4A5D56]"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
