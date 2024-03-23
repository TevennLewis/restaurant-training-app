import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "submit" | "button";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  type = "button",
  variant = "primary",
  disabled,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` rounded-[5px] leading-none p-2.5 ${
        variant === "primary" && "bg-ironOrange text-explodingStar"
      } ${variant === "secondary" && "bg-explodingStar text-ironOrange"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
