import InfoCard from "@/components/info-card/InfoCard";
import RadialBarChart from "@/components/charts/RadialBarChart";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* LEFT */}
      <div className="flex w-full flex-col gap-4 lg:w-2/3">
        {/* INFO CARDS */}
        <div className="flex flex-wrap justify-between gap-4">
          <InfoCard type="student" />
          <InfoCard type="teacher" />
          <InfoCard type="course" />
          <InfoCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="h-[450px] w-full lg:w-1/3">
            <RadialBarChart />
          </div>
          <div className="h-[450px] w-full lg:w-2/3">
            <BarChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="flex flex-col">
          <LineChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-4 lg:w-1/3">RIGHT</div>
    </div>
  );
};

export default AdminPage;
