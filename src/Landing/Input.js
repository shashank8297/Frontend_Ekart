import React from "react";

const FormInput = ({
  value,
  className,
  required,
  onChange,
  label,
  type,
  placeholder
}) => {
  return (
    <div className="group">
      <input
        type={type}
        className={className}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default FormInput;