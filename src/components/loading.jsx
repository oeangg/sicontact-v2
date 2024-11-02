export const Loading = () => {
  return (
    <div className=" h-screen  flex animate-pulse  ">
      <div className="max-w-4xl w-full mx-auto bg-background  rounded-xl   flex flex-col gap-1  items-center h-4/5 ">
        <h1 className="m-auto text-2xl font-semibold text-teal-600 ">
          Loading data...
        </h1>
      </div>
    </div>
  );
};
