import React from 'react';
import styled from 'styled-components';

export interface KanbanTaskProps {}

const KanbanTask: React.FC<KanbanTaskProps> = () => <Container>KanbanTask</Container>;

export default KanbanTask;

const Container = styled.section`
  height: 70px;
  background-color: #202020;
  padding: 5px;
  &:hover {
    background-color: #313131;
  }
  &:not(:last-child) {
    border-bottom: 1px solid rgb(49, 49, 49);
  }
`;
