import "../styles/diet.css";

function Diet() {
  return (
    <>
      <section className="diet-hero">
        <div className="container">
          <h1>Healthy Diet Plans</h1>

          <p>
            Choose the perfect nutrition plan that matches your health and
            fitness goals.
          </p>
        </div>
      </section>

      <section className="diet-section">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-4 col-md-6">
              <div className="card diet-card">

                <div className="card-header">
                  🔥 Weight Loss Plan
                </div>

                <div className="card-body">
                  <ul>
                    <li><b>Breakfast:</b> Oatmeal + Fruit</li>
                    <li><b>Lunch:</b> Grilled Chicken + Salad</li>
                    <li><b>Dinner:</b> Tuna + Vegetables</li>
                    <li><b>Snack:</b> Apple or Yogurt</li>
                    <li><b>Calories:</b> 1500 - 1800 kcal</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card diet-card">

                <div className="card-header">
                  ⚖️ Maintain Weight
                </div>

                <div className="card-body">
                  <ul>
                    <li><b>Breakfast:</b> Eggs + Toast</li>
                    <li><b>Lunch:</b> Rice + Chicken + Veggies</li>
                    <li><b>Dinner:</b> Salad + Protein</li>
                    <li><b>Snack:</b> Nuts or Fruit</li>
                    <li><b>Calories:</b> 2000 - 2400 kcal</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card diet-card">

                <div className="card-header">
                  💪 Weight Gain Plan
                </div>

                <div className="card-body">
                  <ul>
                    <li><b>Breakfast:</b> Eggs + Peanut Butter Toast</li>
                    <li><b>Lunch:</b> Rice + Meat + Avocado</li>
                    <li><b>Dinner:</b> Pasta + Chicken</li>
                    <li><b>Snack:</b> Smoothie or Nuts</li>
                    <li><b>Calories:</b> 2800 - 3200 kcal</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="container">
        <div className="tips-section">

          <h2>🌱 Important Health Tips</h2>

          <div className="row">

            <div className="col-md-6">
              <div className="tip-box">
                💧 Drink at least 2 liters of water daily.
              </div>
            </div>

            <div className="col-md-6">
              <div className="tip-box">
                🥗 Avoid processed foods and excess sugar.
              </div>
            </div>

            <div className="col-md-6">
              <div className="tip-box">
                🏃 Exercise regularly for better health.
              </div>
            </div>

            <div className="col-md-6">
              <div className="tip-box">
                😴 Sleep 7-8 hours every night.
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Healthy Lifestyle Website | Stay Healthy & Strong</p>
      </footer>
    </>
  );
}

export default Diet;