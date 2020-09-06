import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import KanbanColumn from './components/KanbanColumn';

export interface KanbanProps {}

const Kanban: React.FC<KanbanProps> = () => {
  const initialColumns = [
    {
      id: '0',
      name: 'ToDo',
      tasksOrder: ['0', '1', '2', '3', '4', '5', '6', '7'],
    },
    {
      id: '1',
      name: 'ToDo',
      tasksOrder: [],
    },
    {
      id: '2',
      name: 'ToDo',
      tasksOrder: [],
    },
  ];
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result: DropResult): any => {
    const { source, draggableId, destination } = result;
    console.log(result);

    if (!destination) return;
    // if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    setColumns((prev) =>
      prev
        .map((item) =>
          item.id !== source.droppableId
            ? item
            : { ...item, tasksOrder: item.tasksOrder.filter((taskId) => taskId !== draggableId) },
        )
        .map((item) => item),
    );
    setColumns((prev) =>
      prev.map((item) => {
        if (item.id === destination.droppableId) {
          const tasksOrderCopy = [...item.tasksOrder];
          tasksOrderCopy.splice(destination.index, 0, draggableId);
          return { ...item, tasksOrder: tasksOrderCopy };
        }
        return item;
      }),
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Main>
        {columns.map((column) => (
          <KanbanColumn key={column.id} column={column} />
        ))}
      </Main>
    </DragDropContext>
  );
};

export default Kanban;

const Main = styled.main`
  padding: calc(50px + 10px) 10px 10px;
  display: flex;
  align-items: flex-start;
`;
