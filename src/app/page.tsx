"use client";

import { useRouter } from "next/navigation";
import { useRole } from "@/context/RoleContext";

const roles = [
  {
    title: "Admin",
    description: "School management and oversight",
    bgColor: "bg-purple",
  },
  {
    title: "Teacher",
    description: "Class and student management",
    bgColor: "bg-yellow",
  },
  {
    title: "Student",
    description: "Access your academic information",
    bgColor: "bg-sky",
  },
  {
    title: "Parent",
    description: "Monitor your child's progress",
    bgColor: "bg-pink-50",
  },
];

const Homepage = () => {
  const router = useRouter();
  const { setRole } = useRole();

  const handleLogin = (selectedRole: string) => {
    setRole(selectedRole.toLowerCase());
    router.push(`/${selectedRole.toLowerCase()}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-semibold text-gray-800">
          Select Your Role
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              role="button"
              tabIndex={0}
              className={`${role.bgColor} flex min-h-[200px] cursor-pointer flex-col justify-between rounded-2xl p-6 transition-transform hover:scale-105`}
              onClick={() => handleLogin(role.title)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleLogin(role.title);
                }
              }}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {role.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{role.description}</p>
              </div>
              <button
                type="button"
                className="mt-4 self-start rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Login as {role.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
