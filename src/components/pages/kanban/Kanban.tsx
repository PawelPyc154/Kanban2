import React from 'react';
import styled from 'styled-components';
import KanbanCard from './components/KanbanCard';

export interface KanbanProps {}

const Kanban: React.FC<KanbanProps> = () => (
  <Main>
    <KanbanCard />
    <KanbanCard />
    <KanbanCard />
    <KanbanCard />
    <KanbanCard />
    <KanbanCard />
    <KanbanCard />
    <KanbanCard />
    <KanbanCard />
    <KanbanCard />
  </Main>
);

export default Kanban;

const Main = styled.main`
  padding: calc(50px + 10px) 10px 10px;
  overflow-x: auto;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  height: 100vh;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #252525;
  }
  &::-webkit-scrollbar-thumb {
    background: grey;
  }
`;
