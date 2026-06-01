import "../styles/main.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function Main() {
  return (
    <>
      <header>
        <div className="container">

          <div className="navbar">

            <div className="logo">Healthy Life</div>

            <nav>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/calories">Calories</Link></li>
                <li><Link to="/diet">Diet Plans</Link></li>
                <li><Link to="/bmi">BMI</Link></li>
                <li><button className="register">Contact</button></li>
              </ul>
            </nav>

          </div>

          <section className="main-hero">

            <div className="hero-text">

              <h1>Transform Your Lifestyle With Healthy Habits</h1>

              <p>
                Discover personalized nutrition plans,
                calorie tracking, workout routines,
                and wellness tips.
              </p>

              <div className="hero-buttons">
                <a href="#" className="primary">Get Started</a>
                <a href="#" className="secondary">Learn More</a>
              </div>

            </div>

            <div className="info-box">

              <h2>Today's Health Tip</h2>

              <p>🥗 Eat fresh vegetables daily</p>
              <p>💧 Drink 2 liters of water</p>
              <p>🏃 Exercise at least 30 minutes</p>
              <p>😴 Sleep 7-8 hours every night</p>

            </div>

          </section>

        </div>
      </header>
      <section className="cards-section">

  <h2>Healthy Lifestyle Essentials</h2>

  <div className="main-cards">

    <div className="main-card">
      <div className="icon">🥦</div>
      <h3>Healthy Eating</h3>
      <p>
        Build strong eating habits with balanced meals and nutritious ingredients.
      </p>
    </div>

    <div className="main-card">
      <div className="icon">💧</div>
      <h3>Hydration</h3>
      <p>
        Staying hydrated improves energy, focus, and overall body performance.
      </p>
    </div>

    <div className="main-card">
      <div className="icon">🏋️</div>
      <h3>Daily Exercise</h3>
      <p>
        Keep your body active with workouts, stretching, and healthy movement.
      </p>
    </div>

    <div className="main-card">
      <div className="icon">🧘</div>
      <h3>Mental Wellness</h3>
      <p>
        Reduce stress and improve mental health through mindfulness and relaxation.
      </p>
    </div>

  </div>

</section>

<footer>
  <p>© 2026 Healthy Life | All Rights Reserved</p>
</footer>
    </>
  );
}

export default Main;