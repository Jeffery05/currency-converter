import UserInput from "./Result";

function Home() {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="80">
          <h1>
          Convert <span>It.</span>
          </h1>
          <h2>
            Get real time exchange rates and historical data for over 200+ currencies!
          </h2>
          <div className="d-flex">
            <a href="/tool" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
