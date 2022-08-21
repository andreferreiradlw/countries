import { useState } from 'react';
// styles
import { Container, OptionContainer, Placeholder, List, ListItem } from './Select.styles';
// components
import ArrowDown from '/public/arrow-down.svg';

interface SelectProps {
  placeholder: string;
  options: string[];
  onChange?: (value: string) => void;
}

const Select = ({ placeholder, options, onChange, ...rest }: SelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    // fallback
    if (onChange) onChange(value);
    // update states
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <Container data-testid="selectContainer" {...rest}>
      <OptionContainer onClick={toggleOpen} data-testid="selectOptionContainer">
        <Placeholder data-testid="selectPlaceholder">{selectedOption || placeholder}</Placeholder>
        <ArrowDown />
      </OptionContainer>
      {isOpen && (
        <List data-testid="selectOptionList">
          {options.map((option, i) => (
            <ListItem onClick={onOptionClicked(option)} key={`select-option-${i}-${option}`} data-testid="selectOption">
              {option}
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Select;
