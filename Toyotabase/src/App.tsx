import Title from "./components/Title";
import ListGroup from "./components/ListGroup";
import Input from "./components/Input";



function App()
{
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <Title title="Toyotabase"/>

      <Input />

      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;