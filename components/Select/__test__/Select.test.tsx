import React from 'react';
import { render, screen, fireEvent, within } from '@/utils';
import Select from '../index';
import defaultData from './Select.data.json';

const renderSelect = (props?: {}) => {
  render(<Select {...defaultData} {...props} />);

  const Container = screen.queryByTestId('selectContainer');
  const OptionContainer = screen.queryByTestId('selectOptionContainer');
  const Placeholder = screen.queryByTestId('selectPlaceholder');
  const OptionList = screen.queryByTestId('selectOptionList');

  return { screen, Container, OptionContainer, Placeholder, OptionList };
};

const mockOptionClick = jest.fn();

describe('Select Closed', () => {
  it('Should display the select container by default', () => {
    const { Container } = renderSelect();

    expect(Container).toBeInTheDocument();
  });

  it('Should not display the option list by default', () => {
    const { OptionList } = renderSelect();

    expect(OptionList).not.toBeInTheDocument();
  });
});

describe('Select Opened', () => {
  beforeEach(() => {
    const { OptionContainer } = renderSelect({ onChange: mockOptionClick });

    OptionContainer && fireEvent.click(OptionContainer);
  });

  it('Should display the option list when the option container is clicked', () => {
    expect(screen.queryByTestId('selectOptionList')).toBeInTheDocument();
  });

  it('Should display the correct number of options', () => {
    const list = screen.queryByTestId('selectOptionList');

    const options = list && within(list).queryAllByTestId('selectOption');

    expect(options?.length).toBe(defaultData.options.length);
  });

  it('Should display the options with the correct label', () => {
    const list = screen.queryByTestId('selectOptionList');

    const options = list && within(list).queryAllByTestId('selectOption');

    options?.forEach((option, i) => {
      expect(option).toHaveTextContent(defaultData.options[i]);
    });
  });

  it('Should trigger the callback function when an option is clicked', () => {
    const options = screen.queryAllByTestId('selectOption');

    expect(options.length).toBe(3);

    options && fireEvent.click(options[0]);

    expect(mockOptionClick).toHaveBeenCalledTimes(1);
    // args
    expect(mockOptionClick.mock.calls[0].length).toBe(1);
    // first arg
    expect(mockOptionClick.mock.calls[0][0]).toBe(defaultData.options[0]);
  });
});
