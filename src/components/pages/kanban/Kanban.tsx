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
      tasks: [
        { id: '0', name: 'task1' },
        { id: '1', name: 'task2' },
        { id: '3', name: 'task2' },
        { id: '4', name: 'task2' },
        { id: '5', name: 'task2' },
        { id: '6', name: 'task2' },
        { id: '7', name: 'task2' },
        { id: '8', name: 'task2' },
        { id: '9', name: 'task2' },
        { id: '10', name: 'task2' },
        { id: '11', name: 'task2' },
        { id: '12', name: 'task2' },
        { id: '13', name: 'task2' },
        { id: '14', name: 'task2' },
      ],
    },
    {
      id: '1',
      name: 'ToDo',
      tasks: [
        { id: '15', name: 'task1' },
        { id: '16', name: 'task2' },
        { id: '17', name: 'task2' },
        { id: '18', name: 'task2' },
        { id: '19', name: 'task2' },
        { id: '20', name: 'task2' },
      ],
    },
    {
      id: '2',
      name: 'ToDo',
      tasks: [
        { id: '21', name: 'task1' },
        { id: '22', name: 'task2' },
        { id: '23', name: 'task2' },
      ],
    },
    {
      id: '3',
      name: 'ToDo',
      tasks: [],
    },
    // {
    //   id: '4',
    //   name: 'ToDo',
    //   tasks: [
    //     { id: '27', name: 'task1' },
    //     { id: '28', name: 'task2' },
    //     { id: '29', name: 'task2' },
    //   ],
    // },
    // {
    //   id: '5',
    //   name: 'ToDo',
    //   tasks: [
    //     { id: '30', name: 'task1' },
    //     { id: '31', name: 'task2' },
    //     { id: '32', name: 'task2' },
    //   ],
    // },
    // {
    //   id: '6',
    //   name: 'ToDo',
    //   tasks: [
    //     { id: '33', name: 'task1' },
    //     { id: '34', name: 'task2' },
    //     { id: '35', name: 'task2' },
    //   ],
    // },
    // {
    //   id: '8',
    //   name: 'ToDo',
    //   tasks: [
    //     { id: '36', name: 'task1' },
    //     { id: '37', name: 'task2' },
    //     { id: '38', name: 'task2' },
    //   ],
    // },
  ];
  const [columns, setColumns] = useState(initialColumns);

  const swap = (array: Array<any>, sourceIndex: number, destinationIndex: number) => {
    const arrayCopy = [...array];
    [arrayCopy[sourceIndex], arrayCopy[destinationIndex]] = [array[destinationIndex], array[sourceIndex]];
    return arrayCopy;
  };

  const onDragEnd = (result: DropResult): any => {
    const { source, destination } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    // if (destination.index !== source.index) {
    //   setColumns((prev) =>
    //     prev.map((column) =>
    //       column.id === source.droppableId
    //         ? { ...column, tasks: swap(column.tasks, source.index, destination.index) }
    //         : column,
    //     ),
    //   );
    // }

    setColumns((prev) =>
      prev.map((column) =>
        column.id === source.droppableId
          ? { ...column, tasks: swap(column.tasks, source.index, destination.index) }
          : column,
      ),
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
