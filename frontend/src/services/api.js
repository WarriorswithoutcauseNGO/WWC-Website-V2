const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export const createOrder = async (amount) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: Number(amount) * 100 }), // Convert to paise
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to create order');
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/verify-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to verify payment');
  }
};