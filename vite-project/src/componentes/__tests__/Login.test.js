import {render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login'

test('Login component should render', () => {
    render(<Login />,{wrapper:MemoryRouter});
    const loginComponent = screen.getByTestId('login-1');
    expect(loginComponent).toBeInTheDocument();
});
