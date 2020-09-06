import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import KanbanTask from './KanbanTask';

export interface KanbanColumnProps {
  column: {
    id: string;
    name: string;
    tasks: { id: string; name: string }[];
  };
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ column }) => (
  <Container>
    {/* <Wrapper> */}
    <Header>
      <InputNameCard type="text" placeholder="Filter By Name" />
    </Header>
    <Droppable droppableId={column.id}>
      {(provided) => (
        <>
          <TasksWrapper {...provided.droppableProps} ref={provided.innerRef}>
            {column.tasks.map((task, index) => (
              <KanbanTask key={task.id} task={task} index={index} />
            ))}

            {provided.placeholder}
            <AddNewTask placeholder="Add new task" />
          </TasksWrapper>
        </>
      )}
    </Droppable>
    {/* </Wrapper> */}
  </Container>
);

export default KanbanColumn;

const Container = styled.div`
  flex-shrink: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 78px);
  margin-right: 10px;
`;
// const Wrapper = styled.section`
//   /* height: calc(100% - 32px); */
//   & > :not(.task) {
//     /* background: #404040; */
//   }
// `;
const TasksWrapper = styled.div`
  border: 1px solid rgb(49, 49, 49);
  overflow-y: auto;
  display: flex;
  flex-direction: column;

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
const AddNewTask = styled.input`
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
