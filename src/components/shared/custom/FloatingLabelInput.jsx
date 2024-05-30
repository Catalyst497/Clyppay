import {
  Fieldset,
} from "@/components/shared/shadcn/formElements";
import { useState } from "react";

const FloatingLabelInput = ({
  label,
  name,
  type,
  value, // Add value attribute
  onChange,
  error,
  ...props
}) => {
  const [touched, setTouched] = useState(false);
  const handleBlur = (e) => {
    onBlur(e);
    setTouched(true);
  };
  return (
    <Fieldset className="relative">
      <input
        type={type}
        id={name}
        name={name}
        value={value} // Bind value attribute to formik value
        onChange={onChange}
        className= {`indent-1.5 mb-5 block rounded-full   px-2.5 pb-2.5 py-7 w-full border border-input border-1 text-sm text-black bg-transparent  appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-border  peer`}
        placeholder=" "
      />
           {<p>{error}</p>}
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-6 z-10 origin-[0] start-4 peer-focus:text-input peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
    </Fieldset>
  );
};
export default FloatingLabelInput;
