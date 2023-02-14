import {render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Waiter from '../Waiter'

test('Waiter component should render', () => {
    render(<Waiter />,{wrapper:MemoryRouter});
    const waiterComponent = screen.getByTestId('waiter-1');
    expect(waiterComponent).toBeInTheDocument();
});

test('Waiter component renders desayunos link', () => {
    render(<Waiter />,{wrapper:MemoryRouter});
    const linkElement = screen.getByText(/DESAYUNOS/i);
    expect(linkElement).toBeInTheDocument();
});

test('Waiter component renders comidas link', () => {
    render(<Waiter />,{wrapper:MemoryRouter});
    const linkElement = screen.getByText(/HAMBURGUESAS Y ACOMPAÑAMIENTOS/i);
    expect(linkElement).toBeInTheDocument();
});

test('Waiter component renders bebidas link', () => {
    render(<Waiter />,{wrapper:MemoryRouter});
    const linkElement = screen.getByText(/BEBIDAS/i);
    expect(linkElement).toBeInTheDocument();
});