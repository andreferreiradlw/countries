import { render, RenderResult, RenderOptions } from '@testing-library/react';
// theme
import ThemeProvider from '../theme';

const wrappedRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: ThemeProvider, ...options });

export * from '@testing-library/react';

export { wrappedRender as render };
