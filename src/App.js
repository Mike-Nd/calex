import "./App.css";
import React, { useState } from "react";
import Display from "./components/display";

function App() {
  const [pipAmount, setPipAmount] = useState("");
  const [pipValue, setPipValue] = useState("");
  const [riskAmount, setRiskAmount] = useState("");
  const [calculations, setCalcultions] = useState([]);

  const Calculate = () => {
    const answer = riskAmount / (pipValue * pipAmount);

    //display answer
    if (pipAmount !== "" && pipValue !== "" && riskAmount !== "") {
      setCalcultions([...calculations, answer]);
    } else {
      return;
    }
  };

  //clear the input spaces
  const Clear = () => {
    setPipValue("");
    setPipAmount("");
    setRiskAmount("");
    setCalcultions("");
  };

  return (
    <div className="App">
      <div class="major">
        <div className="extra">
          <p>
            This lot-size calculator helps you determine the best lot-size to go
            into the market with as it considers the amount your willing to risk
            during it's calculation, this in turn will help you in your risk
            management, preserving your capital and giving you an edge in your
            trading.
          </p>

          <p>
            It's completely free but don't forget to check out our other tools
            and resources the helps give traders an edge in the market, also
            remember to recommend to other persons that would find it useful.
          </p>

          <h3>How to Use.</h3>
          <p>
            In order to use the lot-size calculator, you have to know the amount
            of pips of stop loss, the standard pip value of your currency pair;
            for dollar pairs it's usually $10 but it varies for other pairs, if
            you don't know the pipValue of your currency pair, click this link
            to find out. Also input the amount you're willing to risk and simply
            click calculate.
          </p>
        </div>
        <div className="container">
          {/* display section */}
          <header className="App-header">
            <h1>Lot-size Calculator</h1>
            <div className="main-section">
              {calculations.length ? (
                <Display
                  calculations={calculations[calculations.length - 1]}
                  pipValue={pipValue}
                  pipAmount={pipAmount}
                  riskAmount={riskAmount}
                />
              ) : (
                <h3 className="display-default">
                  Enter Values Correctly Below.
                </h3>
              )}
            </div>
          </header>
          <section className="desktop-input">
            {/* section for inputing values */}
            <section className="inputs">
              <input
                className="input-box2"
                placeholder="Pip Count; eg: 20"
                value={pipAmount}
                onChange={(e) => setPipAmount(e.target.value)}
                autoFocus
                type="number"
              />
              <input
                className="input-box1"
                placeholder="Pip Value; eg: 10"
                value={pipValue}
                onChange={(e) => setPipValue(e.target.value)}
                type="number"
              />
              <input
                className="input-box3"
                placeholder="Risk Amount; eg: 100"
                value={riskAmount}
                onChange={(e) => setRiskAmount(e.target.value)}
                type="number"
              />
            </section>
            <footer className="footer">
              <button className="footer-btn" onClick={() => Calculate()}>
                Calculate
              </button>
              <button className="footer-btn" onClick={() => Clear()}>
                Clear
              </button>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
