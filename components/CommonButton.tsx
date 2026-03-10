import React from "react";

interface CommonButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-8 py-3 text-sm font-black uppercase tracking-widest rounded-full 
        cursor-pointer transition-all duration-300 
        bg-brand-medium text-white border border-brand-medium
        hover:bg-brand-dark hover:border-brand-dark
        shadow-lg shadow-brand-medium/20
        active:scale-95
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default CommonButton;
