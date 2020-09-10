import React from 'react';
import styled from 'styled-components';
import { DraggableProvided } from 'react-beautiful-dnd';

export interface ColumnHeaderProps {
  providedColumn: DraggableProvided;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ providedColumn }) => (
  <Header {...providedColumn.dragHandleProps}>
    <InputNameCard type="text" placeholder="Filter By Name" />
  </Header>
);

export default ColumnHeader;

const Header = styled.header`
  height: 50px;
  border-bottom: 1px solid #313131;
  background-color: #313131;
`;
const InputNameCard = styled.input`
  width: calc(100%);
  height: 40px;
  border: none;
  background-color: #252525;
  color: white;
  font-size: 20px;
  padding: 10px;

  &:focus {
    border: 1px solid white;
    outline: none;
  }
`;
