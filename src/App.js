import './App.css';
import Inventory from './views/Inventory';
import Customers from './views/Customers';


function App() {
  return (
    <div className="App">
      <Customers />
      <Inventory/>
    </div>
  );
}

export default App;
