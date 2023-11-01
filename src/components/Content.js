import Part from "./Part";

const Content = (props) => {
  return (
    <>
      {/* {props.exercises.map((item, index) => (
        <p key={index}>
          {item.title} {item.point}
        </p>
      ))} */}
      <Part title={props.part1.name} point={props.part1.exercises} />
      <Part title={props.part2.name} point={props.part2.exercises} />
      <Part title={props.part3.name} point={props.part3.exercises} />
    </>
  );
};

export default Content;
