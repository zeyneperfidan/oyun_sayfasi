export default function CardComponent(props) {
  return (
    <div className="cardComponent">
      <img
        width={150}
        src={
          props.imageUrl ? props.imageUrl : "https://via.placeholder.com/150"
        }
        alt="placeholder"
      />
      <span>{props.name ? props.name : "Text"}</span>
    </div>
  );
}