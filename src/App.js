import "./App.css";
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <header><h1>PinMyHike</h1></header>
      <body></body>
      <Form location={"53.374378, -1.711401"} />
    </div>
  );
}

export default App;
