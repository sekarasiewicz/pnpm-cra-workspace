import logo from './logo.svg';
import './App.css';
import {SimpleCard} from "@awesomecards/ui";
import {ThemeProvider} from "styled-components";

const additional = {
    main: '#FFFF00',
    surface: '#FFFFB3',
    border: '#26293c',
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={additional}>
      <SimpleCard url={''} title={'Tile'} text={'Text'}/>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
