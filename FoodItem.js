import React from 'react';

// Inline CSS for the FoodItem component
const foodItemStyle = {
    container: {
        padding: '20px',
        backgroundColor: '#e0f7fa',
        borderRadius: '5px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    header: {
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: '0',
    },
    listItem: {
        padding: '10px',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        marginBottom: '10px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
};

function FoodItem() {
    const foodItems = [
        { id: 1, name: 'Apple', quantity: '10 pieces' },
        { id: 2, name: 'Bread', quantity: '5 loaves' },
        { id: 3, name: 'Milk', quantity: '2 liters' },
    ];

    return (
        <div style={foodItemStyle.container}>
            <h1 style={foodItemStyle.header}>Available Food Items</h1>
            <ul style={foodItemStyle.list}>
                {foodItems.map(item => (
                    <li key={item.id} style={foodItemStyle.listItem}>
                        <strong>{item.name}</strong> - {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FoodItem;
