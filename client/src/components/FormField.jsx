import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  dark
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className= {dark===false?"block text-sm font-medium text-gray-900": "block text-sm font-medium text-[#666e75]"}
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className={dark===false?"font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black":"font-semibold text-xs bg-[#666e75] py-1 px-2 rounded-[5px] text-white"}
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-100 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
