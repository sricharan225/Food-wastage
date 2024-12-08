import React, { useState } from 'react';

const FoodDonor = () => {
    const [foodDetails, setFoodDetails] = useState({
        foodName: '',
        quantity: '',
        expiryDate: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFoodDetails({
            ...foodDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Food Donation Details:', foodDetails);
        alert('Food donation details submitted successfully!');
        // Replace the above alert with an API call to save data in the database.
    };

    return (
        <div className="food-donor-container">
            <h1 className="food-donor-header">Donate Food</h1>
            <form className="food-donor-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Food Name (e.g., Rice)"
                    className="food-donor-input"
                    name="foodName"
                    value={foodDetails.foodName}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    placeholder="Quantity (e.g., 5 kg)"
                    className="food-donor-input"
                    name="quantity"
                    value={foodDetails.quantity}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="date"
                    className="food-donor-input"
                    name="expiryDate"
                    value={foodDetails.expiryDate}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" className="food-donor-button">Submit</button>
            </form>

            <style jsx>{`
                .food-donor-container {
                    width: 90%;
                    max-width: 400px;
                    margin: 40px auto;
                    padding: 20px;
                    background: linear-gradient(145deg, #e0f7fa, #b2ebf2);
                    border-radius: 15px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }

                .food-donor-header {
                    font-size: 1.8rem;
                    text-align: center;
                    color: #00796b;
                    margin-bottom: 20px;
                    font-weight: bold;
                }

                .food-donor-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .food-donor-input {
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    transition: box-shadow 0.3s ease;
                }

                .food-donor-input:focus {
                    outline: none;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .food-donor-button {
                    padding: 12px;
                    background-color: #00796b;
                    color: white;
                    font-size: 1rem;
                    font-weight: bold;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                }

                .food-donor-button:hover {
                    background-color: #004d40;
                    transform: scale(1.05);
                }

                @media (max-width: 480px) {
                    .food-donor-container {
                        padding: 15px;
                    }

                    .food-donor-header {
                        font-size: 1.5rem;
                    }

                    .food-donor-input {
                        font-size: 0.9rem;
                    }

                    .food-donor-button {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default FoodDonor;
