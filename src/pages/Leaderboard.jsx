import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leaderboard")
      .then((res) => res.json())
      .then((data) => setLeaders(data));
  }, []);

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <div className="card">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Donations (₹)</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((l, idx) => (
              <tr key={idx}>
                <td>{l.name}</td>
                <td>{l.donations}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Link to="/dashboard">
          <button>Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Leaderboard;
