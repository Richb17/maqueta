import './App.css';
import Inventory from './views/Inventory';
import Customers from './views/Customers';
import Notes from './views/Note';
import LineCategoty from './views/LineCategory';
import CreateEditNotes from './views/CreateEditNotes.js';
import AddProducts from './views/AddProducts';


function App() {
  return (
    <div className="App">
      <Inventory/>
      <Customers/>
      <Notes/>
  <LineCategoty/>
      <CreateEditNotes/>
      <AddProducts/>
    </div>
  );
}

export default App;
