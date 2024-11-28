import Image from "next/image";

interface InfoCardProps {
  type: "student" | "teacher" | "course" | "staff";
}

const InfoCard = ({ type }: InfoCardProps) => {
  return (
    <div className="min-w-[130px] flex-1 rounded-2xl p-4 odd:bg-purple even:bg-yellow">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white px-2 py-1 text-[10px] text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <h1 className="my-4 text-2xl font-semibold">1,234</h1>
      <h2 className="text-sm font-medium capitalize text-gray-500">{type}s</h2>
    </div>
  );
};

export default InfoCard;
