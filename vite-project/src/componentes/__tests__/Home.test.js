import {render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home'

test('Home component should render', () => {
    render(<Home />,{wrapper:MemoryRouter});
    const homeComponent = screen.getByTestId('home-1');
    expect(homeComponent).toBeInTheDocument();
});

test('Home component renders login link', () => {
    render(<Home />,{wrapper:MemoryRouter});
    const linkElement = screen.getByText(/INICIAR SESIÓN/i);
    expect(linkElement).toBeInTheDocument();
});