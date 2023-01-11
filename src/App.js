import './App.css';
import React, {useState} from "react";


function App() {
  const [pipValue, setPipValue] = useState("");
  const [pipAmount, setPipAmount] = useState("");
  const [riskAmount, setRiskAmount] = useState("");


  const Calculate = () => {

  }

  return (
    <div className="App">
      <div className="container">

        {/* display section */}
        <header className="App-header">
          <h1>Pip Calculator</h1>

          <div className="main-section">
            
          </div>
        </header>

        <section className="desktop-input">
          {/* section for inputing values */}
          <section className="inputs">
            <input
              className="input-box1"
              placeholder="Input Pip Value"
              value={pipValue}
              onChange={(e) => setPipValue(e.target.value)}
            />

            <input
              className="input-box2"
              placeholder="Input Pip Amount"
              value={pipAmount}
              onChange={(e) => setPipAmount(e.target.value)}
            />

            <input
              className="input-box3"
              placeholder="Input Risk Amount"
              value={riskAmount}
              onChange={(e) => setRiskAmount(e.target.value)}
            />
          </section>

          <footer className="footer">
            <button className="footer-btn" onClick={() => Calculate()}>
              Calculate
            </button>
          </footer>
        </section>

      </div>
    </div>
  );
}

export default App;
