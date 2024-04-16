"use client";
import { Send } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
type FormType = {
  message: string;
  number: number;
};
const FormLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  const onSubmit = (data: FormType) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[400px] flex flex-col gap-y-3 "
    >
      <textarea
        {...register("message", { required: true })}
        className="max-w-[400px] rounded-lg text-black placeholder:text-gray-500 p-2"
        placeholder="Ask anything"
        rows={10}
      />
      <input
        type="number"
        placeholder="Phone Number"
        {...register("number", { required: true, min: 10 })}
        className="max-w-[400px] rounded-lg p-2"
      />

      <button
        type="submit"
        className="max-w-[400px] bg-purple-600 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-center"
      >
        <Send size={25} /> Send
      </button>
    </form>
  );
};

export default FormLayout;
