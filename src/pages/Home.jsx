import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="form-container">

        <div className="form-header">

          <h1>Start Your Healthy Journey</h1>

          <p>
            Fill in your information and begin your personalized health experience.
          </p>

        </div>

        <form>

          <div className="input-group">

            <label>First Name</label>

            <input
              type="text"
              placeholder="Enter Your First Name"
              maxLength="15"
              required
            />

          </div>

          <div className="input-group">

            <label>Last Name</label>

            <input
              type="text"
              placeholder="Enter Your Last Name"
              maxLength="15"
              required
            />

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter Your Email"
              required
            />

          </div>

          <div className="input-group">

            <label>Gender</label>

            <div className="gender-box">

              <div className="gender-option">
                <input type="radio" name="gender" value="Female" /> Female
              </div>

              <div className="gender-option">
                <input type="radio" name="gender" value="Male" /> Male
              </div>

            </div>

          </div>

          <div className="input-group">

            <label>Age Group</label>

            <select required>
              <option value="">Select Age Group</option>
              <option>Under 18</option>
              <option>18 - 25</option>
              <option>26 - 35</option>
              <option>36 - 50</option>
              <option>50+</option>
            </select>

          </div>

          <div className="input-group">

            <label>Your Goal</label>

            <div className="goal-cards">

              <div className="goal-card">
                🔥
                <h3>Lose Weight</h3>
              </div>

              <div className="goal-card">
                💪
                <h3>Gain Muscle</h3>
              </div>

              <div className="goal-card">
                ⚖️
                <h3>Maintain</h3>
              </div>

            </div>

          </div>

          <div className="input-group">

            <label>Preferred Meal</label>

            <select required>
              <option value="">Select Meal</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Healthy Snacks</option>
            </select>

          </div>

          <input type="submit" value="Start Now" className="submit-btn" />

        </form>

        <div className="footer-text">
          Healthy Life © 2026 | Eat Healthy, Live Better
        </div>

      </div>
    </div>
  );
}

export default Home;