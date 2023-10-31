const Content = (props) => {
  return (
    <>
      {props.exercises.map((item, index) => (
        <p key={index}>
          {item.title} {item.point}
        </p>
      ))}
    </>
  );
};

export default Content;
