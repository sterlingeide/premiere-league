import { render, screen } from '@testing-library/react';
import Admin from './Admin';

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/Sign In/);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/More/);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/Community/);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/Videos/);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/Fantasy/);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/Premier League/);
    expect(navbarElement).toBeInTheDocument();
});