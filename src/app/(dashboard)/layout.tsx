import Image from "next/image";
import Link from "next/link";

import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="w-[14%] p-4 md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School LMS</span>
        </Link>
        <Menu />
      </div>

      <div className="flex w-[86%] flex-col overflow-y-scroll bg-[#F7F8FA] md:w-[92%] lg:w-[84%] xl:w-[86%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
