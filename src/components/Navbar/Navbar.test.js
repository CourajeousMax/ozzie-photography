import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  test('renders nav items correctly', () => {
    render(<Navbar />);
    const portfolioLink = screen.getByText(/Portfolio/i);
    expect(portfolioLink).toBeInTheDocument();
    const workshopsLink = screen.getByText(/Workshops/i);
    expect(workshopsLink).toBeInTheDocument();
    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeInTheDocument();
    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
  });

  test('renders social links correctly', () => {
    render(<Navbar />);
    const facebookIcon = screen.getByAltText(/Facebook/i);
    expect(facebookIcon).toBeInTheDocument();
    const instagramIcon = screen.getByAltText(/Instagram/i);
    expect(instagramIcon).toBeInTheDocument();
  });
});
