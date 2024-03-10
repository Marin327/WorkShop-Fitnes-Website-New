import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App Component', () => {
  it('renders the App component with Header', () => {
    render(<Router>
        <App />
      </Router>
    );

    const headerElement = screen.getByText('Спа Хотел Парадайс: Стилен Хотел в село Баня');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders Home component when the current path is "/"', () => {
    render(<Router initialEntries={['/']}>
        <App />
      </Router>
    );

    const homeTitleElement = screen.getByText('Добре дошли в Хотел Парадайс');
    expect(homeTitleElement).toBeInTheDocument();
  });

  it('renders Contact component when the current path is "/contact"', () => {
    render(<Router initialEntries={['/contact']}>
        <App />
      </Router>
    );

    const contactTitleElement = screen.getByText('Контакт');
    expect(contactTitleElement).toBeInTheDocument();
  });

  it('renders Rooms component when the current path is "/rooms"', () => {
    render(<Router initialEntries={['/rooms']}>
        <App />
      </Router>
    );

    const roomsTitleElement = screen.getByText('Преживейте Изключителното Удоволствие в Нашите Стаи');
    expect(roomsTitleElement).toBeInTheDocument();
  });

  it('renders ReservationForm component when the current path is "/reservation"', () => {
    render(<Router initialEntries={['/reservation']}>
        <App />
      </Router>
    );

    const reservationFormTitleElement = screen.getByText('Направете Резервация');
    expect(reservationFormTitleElement).toBeInTheDocument();
  });

  it('renders Gallery component when the current path is "/gallery"', () => {
    render(<Router initialEntries={['/gallery']}>
        <App />
      </Router>
    );

    const galleryTitleElement = screen.getByText('Gallery');
    expect(galleryTitleElement).toBeInTheDocument();
  });
});