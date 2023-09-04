import Concept from "./Concept";

const Concepts = (props) => {
  const conceptItems = props.items;
  return (
    <ul id="concepts">
      {conceptItems.map((item, index) => (
        <Concept
          key={item.key}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default Concepts;
