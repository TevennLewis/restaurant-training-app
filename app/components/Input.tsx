import React, { HTMLInputAutoCompleteAttribute } from "react";

interface Props {
  type?: string;
  placeholder: string;
  required?: boolean;
  id?: string;
  name?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
}

const Input = ({
  type = "text",
  placeholder,
  required,
  id,
  name,
  autoComplete,
}: Props) => {
  return (
    <input
      className="py-1 px-2 bg-ironOrange/20 focus-visible:outline-none text-flameOrange placeholder-flameOrange rounded-[5px]"
      type={type}
      required={required}
      name={name}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
