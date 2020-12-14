import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <ul>
      <li><a className="active" href="#home">PetHealth</a></li>
      <li><a href="#contact">Tracker</a></li>
      <li><a href="#about">About</a></li>
    </ul>

    <div className="intro-picture">
    <img src="https://images.unsplash.com/photo-1526363269865-60998e11d82d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Man and Woman sitting on couch with dog and cat"/>
    <div className="intro-text">Track Your Best Friend's Health</div> 
    </div>

      </header>
    </div>
  );
}

export default App;
