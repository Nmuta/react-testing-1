import './App.css';
import Expenses from './components/Expenses';

const expenses = [
  { date: '2017-04-05', amount: 0 },
  { date: '2017-04-05', amount: 4 },
]
function App() {


  return (
    <div className="App">
    <Expenses expenses = {expenses}/>

    </div>
  );
}

export default App;
