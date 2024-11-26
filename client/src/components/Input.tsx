import { Label, TextInput } from "flowbite-react";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
  id: string;
  labelValue: string;
  errorMessage?: string;
}

const Input = ({
  handleChange,
  id,
  labelValue,
  placeholder,
  type,
  errorMessage,
}: Props) => {
  //   console.log("🚀 ~ errorMessage:", errorMessage);
  return (
    <div>
      <Label value={labelValue} />
      <TextInput
        type={type || "text"}
        placeholder={placeholder}
        id={id}
        onChange={handleChange}
      />
      {errorMessage && (
        <div className="text-sm text-red-500">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
