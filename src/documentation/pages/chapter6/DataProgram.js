import { Link, useLoaderData } from "react-router";
const DataProgram = () => {
  const dataBase = useLoaderData();
  console.log(dataBase);
  return (
    <div className="card w-fit">
      <div className="card-body">
        <h2 className="card-title text-lg lg:text-2xl font-bold text-shadow-lg/30 bg-violet-600 p-5 text-yellow-200">
          {dataBase?.topic}
        </h2>
        <p className="text-lg text-justify bg-silver text-shadow-lg/10">
          {dataBase?.description}
        </p>
        <div className="card-actions justify-end">
          <Link className="btn">page/c/{dataBase.cid}</Link>
        </div>
      </div>
    </div>
  );
};

export default DataProgram;
