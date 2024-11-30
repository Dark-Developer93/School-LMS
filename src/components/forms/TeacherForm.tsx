"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import InputField from "@/components/forms/InputField";
import { TeacherInputs, teacherSchema } from "@/types/schemas";

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: Partial<TeacherInputs>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherInputs>({
    resolver: zodResolver(teacherSchema),
  });

  const onSubmit = handleSubmit((formData) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create"
          ? "Create a new teacher"
          : "Update teacher information"}
      </h1>
      <span className="text-xs font-medium text-gray-400">
        Authentication Information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs font-medium text-gray-400">
        Personal Information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday?.toISOString().split("T")[0]}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="flex w-full flex-col gap-2 md:w-1/4">
          <label htmlFor="sex" className="text-xs text-gray-500">
            Sex
            <select
              className="w-full rounded-md p-2 text-sm ring-[1.5px] ring-gray-300"
              {...register("sex")}
              defaultValue={data?.sex}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex w-full flex-col justify-center gap-2 md:w-1/4">
          <label
            className="flex cursor-pointer items-center gap-2 text-xs text-gray-500"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
            <input
              type="file"
              id="img"
              {...register("img")}
              className="hidden"
            />
          </label>
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button type="submit" className="rounded-md bg-blue-400 p-2 text-white">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
