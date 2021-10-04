import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

test('renders main element', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
