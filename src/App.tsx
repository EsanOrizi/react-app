import Message from "./components/ListGroup";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    'New York',
    'London',
    'Paris'
  ];
  return <div><ListGroup items={items} heading="Cities" /></div>;
}

export default App;