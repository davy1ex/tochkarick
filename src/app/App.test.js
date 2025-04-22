import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'

import App from './App' // Path to your App component

jest.mock('../features/generatePoint/api/fetchCoordinates', () => ({
  fetchCoordinates: jest.fn(() => Promise.resolve([
    { lat: 52.52, lon: 13.4050 }, // Mocked data for testing (Berlin coordinates)
    { lat: 48.8566, lon: 2.3522 }, // Another mocked data (Paris coordinates)
    { lat: 51.5074, lon: -0.1278 } // Another mocked data (London coordinates)
  ])),
}));

// Mock the generateRandomPoint function
jest.mock('../features/generatePoint/api/generateRandomPoint', () => ({
  generateRandomPoint: jest.fn(() => [55.0, 55.0]), // Fixed random point for testing
}));

test('renders TochaRick text in GeneratePointPage component', async () => {
  // Wrap the App in BrowserRouter since it's using routing
  await act(async () => {
    render(<App />)
  })
  await waitFor(() => {
  // Check if the text 'TochaRick' is in the document
    expect(screen.getByText(/TochaRick/i)).toBeInTheDocument()
  })
})


