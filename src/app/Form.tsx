"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    fullName: yup.string().required(),
    subject: yup.string().required(),
    email: yup.string().email("Invalid email").required(),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    message: yup.string().required(),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full flex-col justify-evenly gap-5"
    >
      <div className="flex gap-2 -sm:flex-col">
        <div className="flex w-1/2 flex-col gap-1 -sm:w-full">
          <label htmlFor="fullName" className="text-heading">
            Full Name*
          </label>
          <input
            {...register("fullName")}
            className="inline-flex w-full items-center justify-center rounded-md border border-dominant bg-dominant p-2 text-heading outline-none placeholder:text-sm placeholder:text-muted focus:bg-muted"
            placeholder="Please enter your full name"
          />
          <p className="text-sm text-muted text-red-800">
            {errors.fullName?.message}
          </p>
        </div>
        <div className="flex w-1/2 flex-col gap-1 -sm:w-full">
          <label htmlFor="subject" className="text-heading">
            Subject*
          </label>
          <input
            {...register("subject")}
            className="inline-flex w-full items-center justify-center rounded-md border border-dominant bg-dominant p-2 text-heading outline-none placeholder:text-sm placeholder:text-muted focus:bg-muted"
            placeholder="Please enter the subject"
          />
          <p className="text-sm text-muted text-red-800">
            {errors.subject?.message}
          </p>
        </div>
      </div>
      <div className="flex gap-2 -sm:flex-col">
        <div className="flex w-1/2 flex-col gap-1 -sm:w-full">
          <label htmlFor="email" className="text-heading">
            Email*
          </label>
          <input
            {...register("email")}
            className="inline-flex w-full items-center justify-center rounded-md border border-dominant bg-dominant p-2 text-heading outline-none placeholder:text-sm placeholder:text-muted focus:bg-muted"
            placeholder="Please enter your email"
          />
          <p className="text-sm text-muted text-red-800">
            {errors.email?.message}
          </p>
        </div>
        <div className="flex w-1/2 flex-col gap-1 -sm:w-full">
          <label htmlFor="phone" className="text-heading">
            Phone*
          </label>
          <input
            {...register("phone")}
            className="inline-flex w-full items-center justify-center rounded-md border border-dominant bg-dominant p-2 text-heading outline-none placeholder:text-sm placeholder:text-muted focus:bg-muted"
            placeholder="Please enter your phone number"
          />
          <p className="text-sm text-muted text-red-800">
            {errors.phone?.message}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="message" className="text-heading">
          Message*
        </label>
        <textarea
          {...register("message")}
          className="inline-flex w-full items-center justify-center rounded-md border border-dominant bg-dominant p-2 text-heading outline-none placeholder:text-sm placeholder:text-muted focus:bg-muted"
          placeholder="Please enter your message here"
        ></textarea>
        <p className="text-sm text-muted text-red-800">
          {errors.message?.message}
        </p>
      </div>
      <button type="submit" className="rounded-md bg-accent p-2 text-inverted">
        Submit
      </button>
    </form>
  );
}
