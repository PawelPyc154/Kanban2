import React from 'react';
import styled from 'styled-components';
import KanbanItem from './KanbanTask';

export interface KanbanColumnProps {}

const KanbanColumn: React.FC<KanbanColumnProps> = () => {
  const items = ['test1', 'test2', 'test3', 'test4', 'test5'];
  return (
    <Container>
      <Wrapper>
        <Header>
          <InputNameCard type="text" placeholder="Filter By Name" />
        </Header>

        {items.map((item) => (
          <KanbanItem key={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default KanbanColumn;

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 75px);
`;
const Wrapper = styled.section`
  overflow-y: auto;
  border: 1px solid rgb(49, 49, 49);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #252525;
  }
  &::-webkit-scrollbar-thumb {
    background: grey;
  }
`;
const Header = styled.header`
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
