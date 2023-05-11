import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchForm() {
  const [value, setValue] = useState("");
  console.log(value);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(fetchGeolocation(value));
    resetForm();
  };

  const resetForm = () => setValue("");

  const cityHandleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value.trimStart());

  return (
    <form className="flex justify-center items-center" onSubmit={onFormSubmit}>
      <input
        className="
            w-2/5
            p-2
            border-slate-700
            border-2 
            rounded-lg
            bg-slate-100
            outline-cyan-500
            placeholder:text-stone-500
        "
        type="text"
        value={value}
        onChange={cityHandleInput}
        placeholder="Search user"
      />
    </form>
  );
}
