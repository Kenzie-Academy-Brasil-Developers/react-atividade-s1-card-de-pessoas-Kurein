import "./Developer.css";

function CardHandle(props) {
  return (
    <div className="cardDiv">
      <h2>Dev: {props.name}</h2>
      <p>Idade: {props.age}</p>
      <p>País: {props.country}</p>
    </div>
  );
}

export default CardHandle;
