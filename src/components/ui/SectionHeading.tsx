import React from "react";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
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
