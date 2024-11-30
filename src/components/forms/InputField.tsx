import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  label: string;
  type?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = <T extends FieldValues>({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps<T>) => {
  return (
    <div className="flex w-full flex-col gap-2 md:w-1/4">
      <label htmlFor={name} className="text-xs text-gray-500">
        {label}

        <input
          type={type}
          {...register(name)}
          className="w-full rounded-md p-2 text-sm ring-[1.5px] ring-gray-300"
          {...inputProps}
          defaultValue={defaultValue}
        />
      </label>
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
