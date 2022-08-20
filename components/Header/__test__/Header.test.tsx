import React from 'react';
import { render, screen } from '@/utils';
import Header from '../index';

const renderHeader = () => {
  // @ts-ignore
  render(<Header />);

  const Container = screen.queryByTestId('headerContainer');
  const Title = screen.queryByTestId('headerTitle');

  return { ...screen, Container, Title };
};

describe('Header', () => {
  it('Should display the header', () => {
    const { Container } = renderHeader();

    expect(Container).toBeInTheDocument();
  });

  it('Should display the header title', () => {
    const { Title } = renderHeader();

    expect(Title).toBeInTheDocument();
  });

  it('Should display the header title as an anchor', () => {
    const { Title } = renderHeader();

    expect(Title?.tagName).toBe('A');
  });

  it('Should display the header title with the correct href', () => {
    const { Title } = renderHeader();

    expect(Title).toHaveProperty('href', 'http://localhost/');
  });
});
