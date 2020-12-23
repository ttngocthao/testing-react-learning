
import "./App.css";
import Congratulation from './components/congratulation/Congratulation'
import GuessedWords from './components/guessedWords/GuessedWords'
function App() {
  return (
    <div className="ui container">
      <h1 className='ui header'>Guess word Game</h1>
      <Congratulation success={true}/>
      <GuessedWords guessedWords={[{guessedWord:'train',letterMatchCount:3}]}/>
    </div>
  );
}

export default App;
