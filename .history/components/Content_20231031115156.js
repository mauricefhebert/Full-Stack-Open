import Part from "./Part";

const Content = (props) => {
  return (
    <>
      {/* {props.exercises.map((item, index) => (
        <p key={index}>
          {item.title} {item.point}
        </p>
      ))} */}
      <Part title={props.exercises[0].title} point={props.exercises[0].point} />
      <Part title={props.exercises[1].title} point={props.exercises[1].point} />
      <Part title={props.exercises[2].title} point={props.exercises[2].point} />
    </>
  );
};

export default Content;
