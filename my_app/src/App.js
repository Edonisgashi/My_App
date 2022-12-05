import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap";

import "./App.css";

const App = () => {
  //   const [grades, setGrades] = useState([]);
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const [student, setStudent] = useState([]);
  const [loaded, setLoader] = useState(false);
  const API = "http://localhost:3000/students";

  const fetchData = async () => {
    const retrievedData = await fetch(API)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        setStudent(retrDt);
        setLoader(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const grades = [];
  grades.push(student.map((el) => Object.values(el.grades)));
  console.log(grades);
  const averageGrade = grades[0].map(
    (el) => el.reduce((acc, elem) => acc + elem) / el.length
  );
  console.log(averageGrade);

  //   console.log(averageGrade);
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-dark  table-hover">
          <caption>List of Students</caption>
          <thead>
            <tr>
              <th className=" text-center" rowSpan={2}>
                Full Name
              </th>
              <th className=" text-center" colSpan={8}>
                Grades
              </th>
            </tr>
            <tr>
              <th className=" text-center">Math</th>
              <th className=" text-center">Chemistry</th>
              <th className=" text-center">Physics</th>
              <th className=" text-center">Biology</th>
              <th className=" text-center">Psychology</th>
              <th className=" text-center">Grammar</th>
              <th className=" text-center">Geography</th>
              <th>Average Grade</th>
            </tr>
          </thead>
          <tbody>
            {student.length ? (
              student.map((el, i) => {
                return (
                  <tr key={i}>
                    <td className=" text-center">
                      {el.firstName} {el.lastName}
                    </td>
                    <td className=" text-center">{el.grades.Math}</td>
                    <td className=" text-center"> {el.grades.Chemistry}</td>
                    <td className=" text-center">{el.grades.Physics}</td>
                    <td className=" text-center">{el.grades.Biology}</td>
                    <td className=" text-center">{el.grades.Psychology}</td>
                    <td className=" text-center">{el.grades.Grammar}</td>
                    <td className=" text-center">{el.grades.Geography}</td>
                    <td className="text-center">
                      {averageGrade[i].toFixed(2)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1>Data hasn't been loaded</h1>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
