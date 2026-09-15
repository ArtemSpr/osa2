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

const Content = (props) => {
  return (
    <Part
      part={props.parts[props.i].name}
      exercises={props.parts[props.i].exercises}
    ></Part>
  );
};

const Total = (props) => {
  const summa = props.parts.reduce((all, part) => {
    return all + part.exercises;
  }, 0);

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
