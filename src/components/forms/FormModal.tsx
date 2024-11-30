/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import {
  Announcement,
  Assignment,
  Class,
  Exam,
  Lesson,
  Parent,
  Result,
  Subject,
} from "@/types";
import { StudentInputs, TeacherInputs } from "@/types/schemas";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// USE LAZY LOADING

// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

type FormType =
  | TeacherInputs
  | StudentInputs
  | Parent
  | Subject
  | Class
  | Lesson
  | Exam
  | Assignment
  | Result
  | Event
  | Announcement;

const TeacherForm = dynamic(() => import("@/components/forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("@/components/forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: FormType) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data as any} />,
  student: (type, data) => <StudentForm type={type} data={data as any} />,
};

const DeleteForm = ({ table }: { table: string }) => (
  <form action="" className="flex flex-col gap-4 p-4">
    <span className="text-center font-medium">
      All data will be lost. Are you sure you want to delete this {table}?
    </span>
    <button
      type="submit"
      className="w-max self-center rounded-md border-none bg-red-700 px-4 py-2 text-white"
    >
      Delete
    </button>
  </form>
);

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: FormType;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  let bgColor = "bg-purple";
  if (type === "create") {
    bgColor = "bg-yellow";
  } else if (type === "update") {
    bgColor = "bg-sky";
  }

  const [open, setOpen] = useState(false);

  const renderForm = () => {
    if (type === "delete" && id) {
      return <DeleteForm table={table} />;
    }
    if ((type === "create" || type === "update") && forms[table]) {
      return forms[table](type, data);
    }
    return "Form not found!";
  };

  return (
    <>
      <button
        type="button"
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-60"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setOpen(false);
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Close modal"
        >
          <div
            className="relative w-[90%] rounded-md bg-white p-4 md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Form container"
          >
            {renderForm()}
            <button
              type="button"
              className="absolute right-4 top-4 cursor-pointer border-none bg-transparent p-0"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
