import { TextInput } from "flowbite-react";
const FormFieldWithLabel = ({
  id,
  label,
  defaultValue,
  placeholder,
  onChange,
  type,
  name,
}) => {
  return (
    <div>
      <div className="mb-2 block">
        <p className="text-xl text-black font-bold ">{label}:</p>
      </div>
      <TextInput
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormFieldWithLabel;
