import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ type = "student" }) {
  const navigate = useNavigate();
  const isStudent = type === "student";
  const loginType = isStudent ? "Student" : "Faculty";
  const placeholderUsername = isStudent ? "Roll Number / Email" : "Employee ID";

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    console.log(`${loginType} login attempted`);
  };

  return (
    <div className="container">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h2>{loginType} Login</h2>
        <p className="subtitle">Enter your account details</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={placeholderUsername} required />
          <input type="password" placeholder="Password" required />

          <div className="forgot">Forgot Password?</div>

          <button type="submit">Login</button>
        </form>

        <p className="signup">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <h1>Welcome to</h1>
        <h1 className="bold">student portal</h1>
        <p>Login to access your account</p>

        <div className="panel-buttons">
          <button
            className={`panel-btn ${isStudent ? "active" : ""}`}
            onClick={() => navigate("/login/student")}
          >
            Student Login
          </button>
          <button
            className={`panel-btn ${!isStudent ? "active" : ""}`}
            onClick={() => navigate("/login/faculty")}
          >
            Faculty Login
          </button>
        </div>

        <button className="back-home-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;
