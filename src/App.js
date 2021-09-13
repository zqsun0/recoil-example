import logo from './logo.svg';
import './App.css';
import {RecoilRoot} from 'recoil';
import CharacterCounter from './component/CharacterCounter';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <CharacterCounter/>
      </div>
    </RecoilRoot>
  );
}

export default App;
