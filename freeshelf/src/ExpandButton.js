function ColorChangeButton(props) {
  return (
    <button
      aria-expanded={props.expand}
      onClick={() => props.setExpand(!expand)}
    ></button>
  );
}

export default ColorChangeButton;
