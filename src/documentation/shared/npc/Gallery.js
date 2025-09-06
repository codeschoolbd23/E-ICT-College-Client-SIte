import React from "react";
import CollegeView from "../../images/home.jpg";
import honour1 from "../../images/honour1.jpg";
import honour2 from "../../images/honour2.jpg";
import honour3 from "../../images/honour3.jpg";
import honour4 from "../../images/honour4.jpg";
import program1 from "../../images/program1.jpg";
import program2 from "../../images/program2.jpg";
import program3 from "../../images/program3.jpg";
import program4 from "../../images/program4.jpg";
import principle1 from "../../images/principle1.jpg";
import principle2 from "../../images/principle2.jpg";
import teacher from "../../images/teacher.jpg";
import teacher2 from "../../images/teacher2.jpg";
import student from "../../images/student.jpg";
import directors from "../../images/directors.jpg";
import act1 from "../../images/act1.jpg";
import { Link } from "react-router";
const Gallery = () => {
  const imagelink1 = [directors, teacher, teacher2, student];
  const imagelink2 = [
    principle1,
    principle2,
    act1,
    program1,
    program2,
    program3,
    program4,
    honour1,
    honour2,
    honour3,
    honour4,
  ];

  return (
    <div className="w-full">
      <img src={CollegeView} alt="college view" className="w-full h-full" />
      <div className="lg:flex flex-wrap w-full">
        {imagelink1.map((lnk) => (
          <div className={`lg:card lg:p-2 lg:shadow-sm w-full h-full`}>
            <figure>
              <img
                src={lnk}
                alt="reward"
                className="w-full h-full lg:h-lvh lg:p-1"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-blue-700 font-semibold">
                College Activities
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link className="link">Show more...</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:flex flex-wrap w-full">
        {imagelink2.map((lnk) => (
          <div className={`lg:card lg:p-2 lg:shadow-sm lg:w-1/3`}>
            <figure>
              <img
                src={lnk}
                alt="reward"
                className="w-full h-full lg:h-lvh lg:p-1"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-blue-700 font-semibold">
                College Activities
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link className="link">Show more...</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
