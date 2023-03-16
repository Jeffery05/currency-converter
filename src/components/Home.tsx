import UserInput from "./UserInput";

function Home() {
  return (
    <div>
      <div className="home mask-custom">
        <div className="container">
          <h1 className="h1-Welcome">
            <b> Exchange Rate Converter</b>
          </h1>
        </div>
      </div>
      <div className="containe allMar">
        <h3>Conversion Tool:</h3>
        <hr></hr>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="email"
            className="form-control"
            id="amount"
            aria-describedby="Amount"
            placeholder="Enter Amount"
          />
          <small id="emailHelp" className="form-text text-muted">
            Should be in your home currency.
          </small>
        </div>

        <select className="form-control mt-3">
          <option>CAD</option>
          <option>USD</option>
          <option>Euro</option>
        </select>
      </div>
    </div>
  );
}

export default Home;
