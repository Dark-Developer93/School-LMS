"use client";

import Image from "next/image";

import FormModal from "@/components/forms/FormModal";
import Pagination from "@/components/pagination/Pagination";
import Table from "@/components/table/Table";
import TableSearch from "@/components/table/TableSearch";
import { eventsData } from "@/lib/data";
import { Event } from "@/types";
import { useRole } from "@/context/RoleContext";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const EventListPage = () => {
  const { role } = useRole();

  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-purple-light"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">All Events</h1>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow"
            >
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow"
            >
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="event" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default EventListPage;
