// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DecentralVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DecentralVault/i);
    expect(titleElement).toBeInTheDocument();
});
