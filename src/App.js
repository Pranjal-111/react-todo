import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Create from './Components/Create';
import List from './Components/AddList';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className='Create'>
     <Create/>
     </div>
     <div className='list'>
    

     </div>
    
    </div>
  );
}

export default App;
