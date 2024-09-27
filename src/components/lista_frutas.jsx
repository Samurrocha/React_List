
function Fruit(props) {
    return <li>{props.name} - ${props.price.toFixed(2)}</li>;
  }
  
  function Lista_frutas() {
    const fruits = [
      { id: 1, name: 'Apple', price: 1.2 },
      { id: 2, name: 'Banana', price: 0.5 },
      { id: 3, name: 'Cherry', price: 2.0 }
    ];
  
    return (
      <>
        <h1>Fruits for Sale</h1>
        <ul>
         
          {fruits.map((fruit) => (
            <Fruit key={fruit.id} name={fruit.name} price={fruit.price} />
          ))}
        </ul>
      </>
    );
  }  

export default Lista_frutas


