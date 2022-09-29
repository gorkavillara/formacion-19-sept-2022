import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

// Deberes para casa
// 1 - Renderizamos App y nos aseguramos de que estamos en WordHelloWorld
// 2 - Probamos que cuando hacemos clic en las tareas vamos a las tareas
// 3 - Probamos que cuando añadimos una tarea, ésta se muestra
// 4 - Probamos que cuando completamos una tarea, ésta se tacha expect().toHaveStyles("text-decoration: line-through")