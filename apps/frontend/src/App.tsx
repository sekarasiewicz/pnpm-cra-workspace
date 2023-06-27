import logo from './logo.svg';
import './App.css';
import {SimpleCard} from "@awesomecards/ui";
import {HelloWorld} from "@react-vite-library/ui";

function App() {
  return (
    <div className="App">
      <SimpleCard url={''} title={'Tile'} text={'Text'}/>
        <HelloWorld/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
