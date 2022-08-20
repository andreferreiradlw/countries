import React from 'react';
import { render, screen } from '@/utils';
import Select from '../index';
import defaultData from './Select.data.json';

const renderSelect = (props?: {}) => {
  render(<Select {...defaultData} {...props} />);

  const Container = screen.queryByTestId('selectContainer');

  return { ...screen, Container };
};

describe('Select', () => {
  it('Should display the select container by default', () => {
    const { Container } = renderSelect();

    expect(Container).toBeInTheDocument();
  });
});
