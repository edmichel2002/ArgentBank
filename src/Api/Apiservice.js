// apiService.js
const BASE_URL = 'http://localhost:3001/api/v1'; //  l'URL de l'API

// Fonction utilitaire pour effectuer les appels API avec authentification
export const apiCallWithAuth = async (method, endpoint, token, data = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const requestOptions = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  };

  const url = `${BASE_URL}/${endpoint}`;

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
