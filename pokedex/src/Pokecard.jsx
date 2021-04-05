function Pokecard(props) {
  const { name, image, type } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} />
      <p>{type}</p>
    </div>
  );
}

export default Pokecard;