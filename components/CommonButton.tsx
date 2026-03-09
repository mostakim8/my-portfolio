import React from "react";

// টাইপস্ক্রিপ্ট ইন্টারফেস
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
        px-[1.7em] py-[0.7em] text-[16px] font-bold rounded-[0.5em] 
        cursor-pointer transition-all duration-300 
        bg-base-200 text-base-content border border-base-300 
        shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] 
        hover:border-white active:shadow-[inset_4px_4px_12px_rgba(0,0,0,0.1),inset_-4px_-4px_12px_rgba(255,255,255,0.8)] 
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default CommonButton;
