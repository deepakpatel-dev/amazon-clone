import './App.css';
import Header from './Header'
import Home from './Home';

function App() {
  return (
    // BEM
    <div className="App">
     {/* <h1> amazon-clone app : By Deepak Patel</h1> */}
     <Header/>
      <Home/>
    </div>
  );
}

export default App;
