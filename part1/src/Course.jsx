import { useState } from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

// const Content = (props) => {
//   for (let i = 0; i <= props.parts.length; i++) {
//     return (
//       <Part
//         part={props.parts[i].name}
//         exercises={props.parts[i].exercises}
//       ></Part>
//     );
//   }
//     return (
//       <div>
//         <Part
//           part={props.parts[0].name}
//           exercises={props.parts[0].exercises}
//         ></Part>
//         <Part
//           part={props.parts[1].name}
//           exercises={props.parts[1].exercises}
//         ></Part>
//         <Part
//           part={props.parts[2].name}
//           exercises={props.parts[2].exercises}
//         ></Part>
//       </div>
//     );
// };

const Content = (props) => {
  return (
    <Part
      part={props.parts[props.i].name}
      exercises={props.parts[props.i].exercises}
    ></Part>
  );
};

const Total = (props) => {
  let summa = 0;

  for (let i = 0; i < props.parts.length; i++) {
    summa += props.parts[i].exercises;
  }

  return <p>Number of exercises {summa}</p>;
};

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name}></Header>

      {props.course.parts.map((part, i) => (
        <Content key={i} parts={props.course.parts} i={i} />
      ))}

      <Total parts={props.course.parts}></Total>
    </div>
  );
};

export default Course;
