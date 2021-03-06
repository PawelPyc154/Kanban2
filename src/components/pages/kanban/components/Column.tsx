import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import KanbanTask from './Task';
import ColumnHeader from './ColumnHeader';

export interface ColumnProps {
  column: {
    id: string;
    name: string;
    tasksOrder: string[];
    columnBlocked: string[];
  };
  startColumn: string;
  indexColumn: number;
}

const Column: React.FC<ColumnProps> = ({ column, startColumn, indexColumn }) => {
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
    <Draggable draggableId={column.id} index={indexColumn}>
      {(providedColumn) => (
        <Container {...providedColumn.draggableProps} ref={providedColumn.innerRef}>
          <ColumnHeader providedColumn={providedColumn} />
          <Droppable droppableId={column.id} isDropDisabled={column.columnBlocked.includes(startColumn)} type="task">
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
      )}
    </Draggable>
  );
};

export default Column;

const Container = styled.div`
  flex-shrink: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 78px);
  margin-right: 10px;
`;
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
