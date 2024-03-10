import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home/Home';

describe('Home Component', () => {
  it('renders the Home component with the correct title and description', () => {
    render(<Home />);
    
    // Check if the title is rendered
    const titleElement = screen.getByText('Добре дошли в Хотел Парадайс');
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText('Преживейте лукс и комфорт в сърцето в село Баня');
    expect(descriptionElement).toBeInTheDocument();
  });

  it('applies animation to the home section with the correct delay', () => {
    render(<Home />);
    
    // Check if the home section has the 'home' class
    const homeSection = screen.getByTestId('home');
    expect(homeSection).toHaveClass('home');

    // Check if the home section has the correct animation properties
    expect(homeSection).toHaveStyle({ opacity: 1 }); // As the animation is completed, opacity should be 1
    expect(homeSection).toHaveStyleRule('opacity', '0', { delay: 1000 }); // Check if the delay is applied
  });
});