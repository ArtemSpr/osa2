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
    <div>
      <Part
        part={props.parts[0].name}
        exercises={props.parts[0].exercises}
      ></Part>
      <Part
        part={props.parts[1].name}
        exercises={props.parts[1].exercises}
      ></Part>
      <Part
        part={props.parts[2].name}
        exercises={props.parts[2].exercises}
      ></Part>
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name}></Header>
      <Content parts={props.course.parts}></Content>
      <Total parts={props.course.parts}></Total>
    </div>
  );
};

export default Course;
