import {render, screen } from '@testing-library/react';
import Home from '../Home'

test('Home component renders login link', () => {
    render(<Home />);
    const linkElement = screen.getByText(/INICIAR SESIÓN/i);
    expect(linkElement).toBeInTheDocument();
});