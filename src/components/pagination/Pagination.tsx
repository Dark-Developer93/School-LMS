const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-4 text-gray-500">
      <button
        type="button"
        disabled
        className="rounded-md bg-slate-200 px-4 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button type="button" className="rounded-sm bg-sky px-2">
          1
        </button>
        <button type="button" className="rounded-sm px-2">
          2
        </button>
        <button type="button" className="rounded-sm px-2">
          3
        </button>
        ...
        <button type="button" className="rounded-sm px-2">
          10
        </button>
      </div>
      <button
        type="button"
        className="rounded-md bg-slate-200 px-4 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
