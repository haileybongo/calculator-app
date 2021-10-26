import Calculator from './components/calculator'
import {Route,} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App" >
      <Route exact path='/' component={Calculator}/> 
    </div>
  );
}

export default App;
