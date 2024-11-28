import Announcements from "@/components/announcements/Announcements";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import RadialBarChart from "@/components/charts/RadialBarChart";
import EventCalendar from "@/components/event-calendar/EventCalendar";
import InfoCard from "@/components/info-card/InfoCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* LEFT */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex flex-wrap justify-between gap-4">
          <InfoCard type="student" />
          <InfoCard type="teacher" />
          <InfoCard type="course" />
          <InfoCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* COUNT CHART */}
          <div className="h-[450px] w-full lg:w-1/3">
            <RadialBarChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="h-[450px] w-full lg:w-2/3">
            <BarChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="h-[500px] w-full">
          <LineChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
