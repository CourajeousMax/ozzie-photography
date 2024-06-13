import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from './page';
import '@testing-library/jest-dom';

describe('ContactPage', () => {
  test('renders contact page correctly', () => {
    render(<ContactPage />);
    const heading = screen.getByText(/Let's navigate the seas of opportunity together!/i);
    expect(heading).toBeInTheDocument();
    const formHeading = screen.getByText(/Contact Us/i);
    expect(formHeading).toBeInTheDocument();
    const phoneNumber = screen.getByText(/\(305\)-510-3802/i);
    expect(phoneNumber).toBeInTheDocument();
  });

  test('submits the contact form', () => {
    render(<ContactPage />);
    const nameInput = screen.getByLabelText(/Name:/i);
    const phoneNumberInput = screen.getByLabelText(/Phone Number:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const messageInput = screen.getByLabelText(/Message:/i);
    const submitButton = screen.getByText(/Set Sail/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneNumberInput, { target: { value: '1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

    fireEvent.click(submitButton);

    expect(nameInput.value).toBe('John Doe');
    expect(phoneNumberInput.value).toBe('1234567890');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(messageInput.value).toBe('Hello, this is a test message.');
  });
});
