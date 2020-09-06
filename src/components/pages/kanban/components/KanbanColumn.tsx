import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import KanbanTask from './KanbanTask';

export interface KanbanColumnProps {
  column: {
    id: string;
    name: string;
    tasksOrder: string[];
    columnBlocked: string[];
  };
  startColumn: string;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ column, startColumn }) => {
  const tasks = [
    { id: '0', name: 'task1' },
    { id: '1', name: 'task2' },
    { id: '2', name: 'task2' },
    { id: '3', name: 'task3' },
    { id: '4', name: 'task4' },
    { id: '5', name: 'task5' },
    { id: '6', name: 'task6' },
    { id: '7', name: 'task7' },
    { id: '8', name: 'task8' },
    { id: '9', name: 'task9' },
    { id: '10', name: 'task10' },
    { id: '11', name: 'task11' },
    { id: '12', name: 'task12' },
    { id: '13', name: 'task13' },
    { id: '14', name: 'task14' },
  ];

  return (
    <Container>
      <Header>
        <InputNameCard type="text" placeholder="Filter By Name" />
      </Header>
      <Droppable droppableId={column.id} isDropDisabled={column.columnBlocked.includes(startColumn)}>
        {(provided) => (
          <>
            <TasksWrapper {...provided.droppableProps} ref={provided.innerRef}>
              {column.tasksOrder
                .map((task) => tasks.find(({ id }) => id === task))
                .map((item, index) => item && <KanbanTask key={item.id} task={item} index={index} />)}

              {provided.placeholder}
              <AddNewTask placeholder="Add new task" />
            </TasksWrapper>
          </>
        )}
      </Droppable>
    </Container>
  );
};

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
