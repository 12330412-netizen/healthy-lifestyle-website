import "../styles/bmi.css";

function BMI() {
  return (
    <>
      <section className="bmi-hero">
        <div className="container">
          <h1>BMI Categories</h1>

          <p>
            Understand your Body Mass Index and maintain a healthier lifestyle.
          </p>
        </div>
      </section>

      <section className="bmi-section">
        <div className="container">
          <div className="bmi-card">

            <div className="bmi-title">
              <h2>BMI Classification Table</h2>
            </div>

            <div className="table-responsive">
              <table className="table table-bordered align-middle">

                <thead>
                  <tr>
                    <th>BMI Range</th>
                    <th>Category</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Less than 18.5</td>
                    <td className="underweight">Underweight</td>
                  </tr>

                  <tr>
                    <td>18.5 - 24.9</td>
                    <td className="normal">Normal</td>
                  </tr>

                  <tr>
                    <td>25 - 29.9</td>
                    <td className="overweight">Overweight</td>
                  </tr>

                  <tr>
                    <td>30 and above</td>
                    <td className="obese">Obese</td>
                  </tr>
                </tbody>

              </table>
            </div>

            <div className="bmi-info-box">
              <h3>💡 Health Tip</h3>

              <p>
                A healthy BMI combined with proper nutrition, exercise,
                hydration, and sleep helps improve your overall health and
                fitness.
              </p>
            </div>

          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Healthy Lifestyle Website</p>
      </footer>
    </>
  );
}

export default BMI;