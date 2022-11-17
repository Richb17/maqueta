import './App.css';
import Inventory from './views/Inventory';
import Customers from './views/Customers';
import Notes from './views/Note';


function App() {
  return (
    <div className="App">
      <Customers />
      <Notes/>
      <Inventory/>
    </div>
  );
}

export default App;
