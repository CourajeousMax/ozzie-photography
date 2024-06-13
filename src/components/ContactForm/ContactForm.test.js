import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  test('renders input with correct label', () => {
    render(<ContactForm label="Name:" name="Name" type="text" id="name" />);
    const inputElement = screen.getByLabelText(/Name:/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('updates value on change', () => {
    render(<ContactForm label="Name:" name="Name" type="text" id="name" />);
    const inputElement = screen.getByLabelText(/Name:/i);
    fireEvent.change(inputElement, { target: { value: 'John Doe' } });
    expect(inputElement.value).toBe('John Doe');
  });
});
