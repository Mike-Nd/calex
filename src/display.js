import "./line.css"

function Display() {
    return (
      <div className="data">
        <h2>$500.00</h2>

        <div className="estimated-profit">
          <h3>Pip count :</h3>
          <h3>{pipValue}</h3>
        </div>

        <div className="estimated-profit">
          <h3>Risk Amount :</h3>
          <h3>${pipAmount}</h3>
        </div>

        <div className="estimated-profit">
          <h3>Pip value :</h3>
          <h3>${riskAmount}</h3>
        </div>
      </div>
    );
}

export default Display;