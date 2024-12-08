import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isExplored, setIsExplored] = useState(false); // State to track if "Explore" is clicked

  const handleExploreClick = () => {
    setIsExplored(true); // Show the About Food Saver content when Explore is clicked
  };

  return (
    <div className="home">
      <div className="buttons">
        {/* Signup button remains as is */}
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        
        {/* Explore button will toggle the isExplored state */}
        <button onClick={handleExploreClick}>Explore</button>
      </div>

      {/* Conditionally render the "About Food Saver" content */}
      {isExplored && (
        <div className="explore-content">
          <h2>About Food Saver</h2>
          <p>The Food Saver App connects food donors with those in need, helping reduce food wastage and improve access to essential food items for everyone in need. It’s a simple yet effective way to contribute to the community and ensure that no food goes to waste.</p>
          <h3>How It Works</h3>
          <ul>
            <li>Donors can list food items they wish to donate.</li>
            <li>Receivers can browse available donations based on their location.</li>
            <li>Food items are picked up or delivered to those in need.</li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .home {
          text-align: center;
          padding: 20px;
          background: linear-gradient(145deg, #e0f7fa, #b2ebf2); /* Gradient background */
          color: #004d40; /* Dark Green text color */
        }

        h1 {
          font-size: 3em;
          margin-bottom: 20px;
          color: #004d40;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Adds shadow to the text */
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 30px; /* Space between buttons and content */
        }

        button {
          padding: 12px 20px;
          background-color: #00796b; /* Dark Green button */
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background-color: #004d40;
          transform: scale(1.05);
        }

        .explore-content {
          margin-top: 30px;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: 0 auto;
          color: #333;
        }

        .explore-content h2 {
          color: #004d40;
          font-size: 2rem;
          margin-bottom: 15px;
        }

        .explore-content p {
          font-size: 1.1rem;
          margin-bottom: 15px;
        }

        .explore-content h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .explore-content ul {
          text-align: left;
          padding-left: 20px;
        }

        .explore-content ul li {
          font-size: 1.1rem;
          margin-bottom: 10px;
        }

        /* Responsive Design */
        @media (max-width: 480px) {
          .home {
            padding: 15px;
          }

          .buttons {
            flex-direction: column;
            gap: 15px;
          }

          .explore-content {
            margin-top: 20px;
            padding: 15px;
          }

          .explore-content h2 {
            font-size: 1.7rem;
          }

          .explore-content p, .explore-content h3, .explore-content ul li {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
