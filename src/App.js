import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Cola from './Cola';
import Jerky from './Jerky';
import ChocolateBar from './ChocolateBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Route exact path="/"><VendingMachine /></Route>
         <Route exact path="/chips"><Chips /></Route>
         <Route exact path="/cola"><Cola /></Route>
         <Route exact path="/jerky"><Jerky /></Route>
         <Route exact path="/chocolate-bar"><ChocolateBar /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
