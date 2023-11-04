import Image from "next/image";

export default function InputField({
  src,
  label,
  placeholder,
  value,
  onChange,
  column,
  isRequired,
  type,
  name,
}) {
  return (
    <div className="w-full">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-9 text-gray-900"
      >
        {label}
        {isRequired ? <span className="text-red-600 -mt-8">*</span> : ""}
      </label>

      <div className={`relative grid grid-cols-${column || "1"} gap-4`}>
        <input
          name={name || "email"}
          type={type || "text"}
          className={`pl-10 pr-4 py-3 border rounded-full w-full shadow`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={isRequired || false}
        />
        <div
          className="absolute inset-y-0 right-0 pr-8 
                      flex items-center  
                      pointer-events-none"
        >
          {src ? <Image src={src} width={16} height={16} alt="icon" /> : ""}
        </div>
      </div>
    </div>
  );
}
