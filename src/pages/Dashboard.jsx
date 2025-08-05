import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [intern, setIntern] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/intern")
      .then((res) => res.json())
      .then((data) => setIntern(data));
  }, []);

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <div className="card">
        <h1>Welcome, {intern.name}</h1>
        <p><strong>Referral Code:</strong> {intern.referralCode}</p>
        <p><strong>Total Donations:</strong> ₹{intern.donations}</p>

        <h3>🎁 Rewards</h3>
        <ul>
          <li>🎓 Certificate</li>
          <li>🎁 Swag Pack</li>
          <li>👕 T-shirt</li>
        </ul>

        <br />
        <Link to="/leaderboard">
          <button>View Leaderboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
