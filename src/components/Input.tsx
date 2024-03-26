import React from "react";

type DefaultProps = {
  customClass?: string;
};

const inputDefaultProps = {
  customClass: "",
} as DefaultProps;

type inputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
  defaultValue: any;
};

function Input({
  labelFor,
  labelText,
  id,
  name,
  type,
  placeholder,
  customClass,
  isRequired,
  defaultValue,
  handleChange,
}: inputProps & DefaultProps) {
  return (
    <div className="flex flex-col justify-start items-start">
      <label htmlFor={labelFor} className="font-semibold mb-2">
        {labelText} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className={`rounded-md shadow-md appearance-none 
        relative block w-full px-3 py-2 border border-gray-300
         placeholder-gray-500 text-gray-900 focus:outline-none 
         focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white  ${customClass}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={handleChange}
        required={isRequired}
     />
      
    </div>
  );
}

Input.defaultProps = inputDefaultProps;

export default Input;
