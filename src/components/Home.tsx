import UserInput from "./Result";

function Home() {
  let w = 8.0607;
  let hi = Math.round((w + Number.EPSILON) * 100) / 100;

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
        <h3>How It Works:</h3>
        <h3>{hi}</h3>
      </div>
    </div>
  );
}

export default Home;
