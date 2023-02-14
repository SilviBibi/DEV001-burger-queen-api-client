import {render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Desayunos from '../Desayunos'

test('Desayunos component should render', () => {
    render(<Desayunos />,{wrapper:MemoryRouter});
    const desayunosComponent = screen.getByTestId('desayunos-1');
    expect(desayunosComponent).toBeInTheDocument();
});

test('Desayunos component renders login link', () => {
    render(<Desayunos />,{wrapper:MemoryRouter});
    const buttonElement = screen.getByText(/MANDAR A COCINA/i);
    expect(buttonElement).toBeInTheDocument();
});