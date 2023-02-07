import "./display.css"

function Display(props) {
    return (
      <div className="data">
        <h2>{props.calculations} Lots</h2>
        <h5>lotsize</h5>

        <div className="estimated-profit">
          <h3>Pip count :</h3>
          <h3>{props.pipAmount}</h3>
        </div>

        <div className="estimated-profit">
          <h3>Pip Value :</h3>
          <h3>${props.pipValue}</h3>
        </div>

        <div className="estimated-profit">
          <h3>Risk Amount :</h3>
          <h3>${props.riskAmount}</h3>
        </div>
      </div>
    );
}

export default Display;