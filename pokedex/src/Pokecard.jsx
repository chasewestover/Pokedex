function Pokecard(props) {
  const { name, image, type, exp} = props;
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} />
      <p>{type}</p>
      <p>{exp}</p>
    </div>
  );
}

export default Pokecard;