import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DragDropContext, DropResult, DragStart, Droppable } from 'react-beautiful-dnd';
import produce from 'immer';
import KanbanColumn from './components/Column';

export interface KanbanProps {}

const Kanban: React.FC<KanbanProps> = () => {
  const initialColumns = [
    {
      id: 'column-1',
      name: 'ToDo',
      tasksOrder: ['0', '1', '2', '3', '4', '5', '6', '7'],
      columnBlocked: ['1'],
    },
    {
      id: 'column-2',
      name: 'ToDo',
      tasksOrder: [],
      columnBlocked: [],
    },
    {
      id: 'column-3',
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

  const onDragEnd = ({ source, draggableId, destination, type }: DropResult): any => {
    if (!destination) return;
    if (type === 'column') {
      setColumns((prev) =>
        produce(prev, (draft) => {
          const copyColumn = draft[source.index];
          // remove task
          draft.splice(source.index, 1);
          // add task
          draft.splice(destination.index, 0, copyColumn);
        }),
      );
    }
    if (type === 'task') {
      setColumns((prev) =>
        produce(prev, (draft) => {
          // remove task
          const startColumnIndex = draft.findIndex((column) => column.id === source.droppableId);
          draft[startColumnIndex].tasksOrder = draft[startColumnIndex].tasksOrder.filter(
            (item) => item !== draggableId,
          );
          // add task
          const endColumnIndex = draft.findIndex((column) => column.id === destination.droppableId);
          const copyTasksOrder = [...draft[endColumnIndex].tasksOrder];
          copyTasksOrder.splice(destination.index, 0, draggableId);
          draft[endColumnIndex].tasksOrder = copyTasksOrder;
        }),
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <Main {...provided.droppableProps} ref={provided.innerRef}>
            {columns.map((column, index) => (
              <KanbanColumn key={column.id} column={column} startColumn={startColumn} indexColumn={index} />
            ))}
            {provided.placeholder}
          </Main>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;

const Main = styled.main`
  padding: calc(50px + 10px) 10px 10px;
  display: flex;
  align-items: flex-start;
`;
