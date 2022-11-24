import './App.css';
import Inventory from './views/Inventory';
import Customers from './views/Customers';
import Notes from './views/Note';
import LineCategoty from './views/LineCategory';
import CreateEditNotes from './views/CreateEditNotes.js';


function App() {
  return (
    <div className="App">
      <Inventory/>
      <Customers/>
      <Notes/>
  <LineCategoty/>
      <CreateEditNotes/>
    </div>
  );
}

export default App;
