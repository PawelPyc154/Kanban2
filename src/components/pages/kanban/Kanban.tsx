import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DragDropContext, DropResult, DragStart } from 'react-beautiful-dnd';
import produce from 'immer';
import KanbanColumn from './components/KanbanColumn';

export interface KanbanProps {}

const Kanban: React.FC<KanbanProps> = () => {
  const initialColumns = [
    {
      id: '0',
      name: 'ToDo',
      tasksOrder: ['0', '1', '2', '3', '4', '5', '6', '7'],
      columnBlocked: ['1'],
    },
    {
      id: '1',
      name: 'ToDo',
      tasksOrder: [],
      columnBlocked: [],
    },
    {
      id: '2',
      name: 'ToDo',
      tasksOrder: [],
      columnBlocked: [],
    },
  ];
  const [columns, setColumns] = useState(initialColumns);
  const [startColumn, setStartColumn] = useState<string>('');

  const onDragStart = (provided: DragStart) => {
    setStartColumn(provided.source.droppableId);
  };

  const onDragEnd = ({ source, draggableId, destination }: DropResult): any => {
    if (!destination) return;
    setColumns((prev) =>
      produce(prev, (draft) => {
        // remove task
        const startColumnIndex = draft.findIndex((column) => column.id === source.droppableId);
        draft[startColumnIndex].tasksOrder = draft[startColumnIndex].tasksOrder.filter((item) => item !== draggableId);
        // add task
        const endColumnIndex = draft.findIndex((column) => column.id === destination.droppableId);
        const copy = [...draft[endColumnIndex].tasksOrder];
        copy.splice(destination.index, 0, draggableId);
        draft[endColumnIndex].tasksOrder = copy;
      }),
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Main>
        {columns.map((column) => (
          <KanbanColumn key={column.id} column={column} startColumn={startColumn} />
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
