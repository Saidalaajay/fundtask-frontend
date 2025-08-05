import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <div className="card">
        <h1>Intern Portal Login</h1>
        <input type="text" placeholder="Enter your name" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
