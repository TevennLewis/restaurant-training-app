import React, { ChangeEvent, HTMLInputAutoCompleteAttribute } from "react";

interface Props {
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  id?: string;
  name?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type = "text",
  placeholder,
  required,
  id,
  name,
  autoComplete,
  label,
  value,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="font-semibold" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        onChange={onChange}
        className="py-1 px-2 bg-ironOrange/20 focus-visible:outline-none text-flameOrange placeholder-flameOrange rounded-[5px]"
        type={type}
        required={required}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default Input;
