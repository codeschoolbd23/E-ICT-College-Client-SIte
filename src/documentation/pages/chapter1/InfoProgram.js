import { Link, useLoaderData } from "react-router";
const InfoProgram = () => {
  const informationData = useLoaderData();
  console.log(informationData);
  return (
    <div className="card w-fit">
      <div className="card-body">
        <h2 className="card-title text-lg lg:text-2xl font-bold text-shadow-lg/30 bg-violet-600 p-5 text-yellow-200">
          {informationData?.topic}
        </h2>
        <p className="text-lg text-justify bg-silver text-shadow-lg/10">
          {informationData?.description}
        </p>
        <div className="card-actions justify-end">
          <Link className="btn">page/c/{informationData.cid}</Link>
        </div>
      </div>
    </div>
  );
};

export default InfoProgram;
