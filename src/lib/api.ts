import axios from 'axios';

// Set base URL from environment or use default
const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Property API endpoints
export const fetchProperties = async (filters = {}) => {
  try {
    const response = await api.get('/properties', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

export const fetchPropertyBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/properties/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching property with slug ${slug}:`, error);
    throw error;
  }
};

export const searchProperties = async (searchParams: any) => {
  try {
    const response = await api.get('/properties', { params: searchParams });
    return response.data;
  } catch (error) {
    console.error('Error searching properties:', error);
    throw error;
  }
};

// Workflow API endpoints
export const fetchAlerts = async () => {
  try {
    const response = await api.get('/workflows');
    return response.data;
  } catch (error) {
    console.error('Error fetching alerts:', error);
    throw error;
  }
};

export const createPropertyAlert = async (templateId: string, customization: any) => {
  try {
    const response = await api.post('/workflows', { templateId, customization });
    return response.data;
  } catch (error) {
    console.error('Error creating property alert:', error);
    throw error;
  }
};

// User saved properties API endpoints
export const saveProperty = async (propertyId: string) => {
  try {
    const response = await api.post(`/saved-properties`, { propertyId });
    return response.data;
  } catch (error) {
    console.error('Error saving property:', error);
    throw error;
  }
};

export const fetchSavedProperties = async () => {
  try {
    const response = await api.get('/saved-properties');
    return response.data;
  } catch (error) {
    console.error('Error fetching saved properties:', error);
    throw error;
  }
};

export const schedulePropertyTour = async (propertyId: string, tourDetails: any) => {
  try {
    const response = await api.post(`/property-tours`, { propertyId, ...tourDetails });
    return response.data;
  } catch (error) {
    console.error('Error scheduling property tour:', error);
    throw error;
  }
};

export default api; 