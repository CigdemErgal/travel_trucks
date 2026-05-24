import Header from "../components/Header";
import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <img src={heroImage} alt="Camper van" />
          <div className="hero-content">
            <h1>Campers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
            <Link to="/catalog">
              <button type="button">View Now</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
