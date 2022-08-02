import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  height: 3.5em;
  min-width: 12em;
  position: relative;
`;

const OptionContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1.5em;
  justify-content: space-between;
  padding: 1em 1.5em;

  & svg {
    fill: ${({ theme }) => theme.colors.darkBlue};
    height: 20px;
    width: 20px;
  }
`;

const Placeholder = styled.div``;

const List = styled.ul`
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  left: 0;
  margin-top: 3.5em;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 1em 1.5em;

  &:hover {
    background: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export { Container, OptionContainer, Placeholder, List, ListItem };
