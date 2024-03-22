import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "submit" | "button";
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({
  children,
  type = "button",
  variant = "primary",
  disabled,
}: Props) => {
  return (
    <button
      className={` rounded-[10px] leading-none p-2.5 ${
        variant === "primary" && "bg-ironOrange text-explodingStar"
      } ${variant === "secondary" && "bg-explodingStar text-ironOrange"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
