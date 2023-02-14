import {render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home'

test('Home component renders login link', () => {
    render(<Home />,{wrapper:MemoryRouter});
    const linkElement = screen.getByText(/INICIAR SESIÓN/i);
    expect(linkElement).toBeInTheDocument();
});