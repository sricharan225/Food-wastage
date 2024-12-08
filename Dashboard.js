import React from 'react';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-header">Dashboard</h1>
            
            {/* Statistics and Recent Activities side by side */}
            <div className="dashboard-row">
                <div className="dashboard-section statistics">
                    <h2 className="section-title">Statistics</h2>
                    <p className="stat-item">Total Donations: <strong>120</strong></p>
                    <p className="stat-item">Total Receivers: <strong>50</strong></p>
                    <p className="stat-item">Total Food Items: <strong>300</strong></p>
                </div>
                <div className="dashboard-section activities">
                    <h2 className="section-title">Recent Activities</h2>
                    <ul className="recent-list">
                        <li>John donated 10 apples</li>
                        <li>Emily donated 5 loaves of bread</li>
                        <li>Mike received 20 oranges</li>
                    </ul>
                </div>
            </div>
            
            {/* Manage section below */}
            <div className="dashboard-manage">
                <h2 className="section-title">Manage</h2>
                <button className="dashboard-button" onClick={() => alert('View All Donations Clicked!')}>
                    View All Donations
                </button>
                <button className="dashboard-button" onClick={() => alert('Manage Receivers Clicked!')}>
                    Manage Receivers
                </button>
                <button className="dashboard-button" onClick={() => alert('Manage Food Items Clicked!')}>
                    Manage Food Items
                </button>
            </div>

            <style jsx>{`
                /* Main Container */
                .dashboard-container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #f4f4f9; /* Light background color */
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                /* Header */
                .dashboard-header {
                    text-align: center;
                    color: #4caf50;
                    font-size: 1.8rem; /* Medium font size */
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                /* Sections Row (Statistics & Activities side-by-side) */
                .dashboard-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 15px; /* Medium gap */
                }

                /* Statistics Section */
                .statistics {
                    flex: 0.48; /* Adjusted width */
                    background-color: #e8f5e9;
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
                }

                .stat-item {
                    margin: 5px 0;
                    font-size: 0.9rem;
                }

                /* Recent Activities Section */
                .activities {
                    flex: 0.48;
                    background-color: #e3f2fd;
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
                }

                .section-title {
                    margin-bottom: 10px;
                    color: #333;
                    font-size: 1.2rem;
                }

                /* Recent Activities List */
                .recent-list {
                    margin: 0;
                    padding-left: 15px;
                    list-style-type: disc;
                    color: #555;
                    font-size: 0.9rem;
                }
                .recent-list li {
                    margin-bottom: 5px;
                }

                /* Manage Section */
                .dashboard-manage {
                    background-color: #ffffff;
                    padding: 15px;
                    border-radius: 8px;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }

                /* Buttons */
                .dashboard-button {
                    display: block;
                    margin: 10px auto;
                    width: 60%; /* Adjusted button width */
                    padding: 10px;
                    background-color: #2196f3;
                    color: white;
                    font-size: 0.9rem;
                    font-weight: bold;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                }

                .dashboard-button:hover {
                    background-color: #1976d2;
                    transform: scale(1.02);
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .dashboard-row {
                        flex-direction: column;
                    }
                    .dashboard-button {
                        width: 100%; /* Full width for buttons on smaller screens */
                    }
                }
            `}</style>
        </div>
    );
}

export default Dashboard;
