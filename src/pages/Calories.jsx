import "../styles/calories.css";

function Calories() {
  return (
    <>
      <section className="cal-hero">
        <div className="container">
          <h1>Calories Guide</h1>
          <p>
            Learn the calories of common healthy foods and manage your nutrition better.
          </p>
        </div>
      </section>

      <section className="calorie-section">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-4 col-md-6">
              <div className="card food-card">
                <div className="card-body">
                  <div className="food-icon">🍎</div>
                  <h3>Apple</h3>
                  <p>1 Medium Apple</p>
                  <div className="calories">95 kcal</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card food-card">
                <div className="card-body">
                  <div className="food-icon">🥚</div>
                  <h3>Boiled Egg</h3>
                  <p>1 Large Egg</p>
                  <div className="calories">78 kcal</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card food-card">
                <div className="card-body">
                  <div className="food-icon">🍗</div>
                  <h3>Chicken Breast</h3>
                  <p>100g Serving</p>
                  <div className="calories">165 kcal</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card food-card">
                <div className="card-body">
                  <div className="food-icon">🍚</div>
                  <h3>Rice</h3>
                  <p>1 Cup</p>
                  <div className="calories">206 kcal</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card food-card">
                <div className="card-body">
                  <div className="food-icon">🍌</div>
                  <h3>Banana</h3>
                  <p>1 Medium Banana</p>
                  <div className="calories">105 kcal</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card food-card">
                <div className="card-body">
                  <div className="food-icon">🥑</div>
                  <h3>Avocado</h3>
                  <p>1/2 Avocado</p>
                  <div className="calories">120 kcal</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="tip-section">
        <div className="container">
          <div className="tip-box">
            <h2>💡 Healthy Tip</h2>

            <p>
              To lose weight, eat fewer calories than you burn.
              To gain weight, eat more calories while maintaining healthy nutrition.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Healthy Lifestyle Website</p>
      </footer>
    </>
  );
}

export default Calories;