import Home from './components/home'
import {Route,} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App" >
      <Route exact path='/' component={Home}/> 
    </div>
  );
}

export default App;
