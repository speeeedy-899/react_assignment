import './App.css';
import Upload from './upload.jsx';

function App() {
  return (
    <header className="App-header">
    <div className="App">
      <h1 className="heading"> Saarthi.AI Assignment</h1>
      <div>
        <h2>Please upload an audio file:</h2>
        <Upload />
      </div>
    </div>
    </header>
  );
}

export default App;
