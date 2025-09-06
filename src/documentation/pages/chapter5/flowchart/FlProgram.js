import { Link, useLoaderData } from "react-router";
const FlProgram = () => {
  const FlData = useLoaderData();
  console.log(FlData);
  return (
    <div className="card w-fit">
      <div className="card-body">
        <h2 className="card-title text-lg lg:text-2xl font-bold text-shadow-lg/30 bg-violet-600 p-5 text-yellow-200">
          {FlData?.topic}
        </h2>
        <p className="text-lg text-justify bg-silver text-shadow-lg/10">
          {FlData?.description}
        </p>
        <div className="card-actions justify-end">
          <Link className="btn">page/c/{FlData.cid}</Link>
        </div>
      </div>
    </div>
  );
};

export default FlProgram;
