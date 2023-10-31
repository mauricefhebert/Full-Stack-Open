import "./styles.css";
import Header from "../components/Header";
import Content from "../components/Content";
import Total from "../components/Total";

const App = () => {
  const course = "Half Stack application development";
  const exercises = [
    {
      title: "Fundamentals of React",
      point: 10
    },
    {
      title: "Using props to pass data",
      point: 7
    },
    {
      title: "State of a component",
      point: 14
    }
  ];

  const totalPoints = exercises.reduce((sum, acc) => {
    return (sum += acc.point);
  }, 0);

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total total={totalPoints} />
    </div>
  );
};

export default App;
