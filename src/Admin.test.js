import { render, screen } from '@testing-library/react';
import Admin from './Admin';

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/Sign In/);
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
    const navbarElement = screen.getByText(/Managers/);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/LEE/);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/Man City/);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Admin />);
    const navbarElement = screen.getByText(/Conte/);
    expect(navbarElement).toBeInTheDocument();
});
