import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="80">
          <h1>
            Convert <span>It.</span>
          </h1>
          <h2>
            Get real time exchange rates and historical data for over 200+
            currencies!
          </h2>
          <div className="d-flex">
            <Link
              className="btn-get-started scrollto"
              aria-current="page"
              to={"/tool"}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
