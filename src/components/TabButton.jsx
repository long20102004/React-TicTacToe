export default function TabButton(props) {
  return (
    <>
      <button onClick={props.onClick}>Button</button>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </>
  );
}
