import React from 'react';
import styled from 'styled-components';

export interface KanbanItemProps {}

const KanbanItem: React.FC<KanbanItemProps> = () => <Container>KanbanItem</Container>;

export default KanbanItem;

const Container = styled.section`
  height: 70px;
  background-color: #252525;
  padding: 5px;
  &:hover {
    background-color: #313131;
  }
  &:not(:last-child) {
    border-bottom: 1px solid rgb(49, 49, 49);
  }
`;
