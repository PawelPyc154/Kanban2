import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

export interface KanbanTaskProps {
  task: { id: string; name: string };
  index: number;
}

const KanbanTask: React.FC<KanbanTaskProps> = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <Container
        className="task"
        {...provided.dragHandleProps}
        {...provided.draggableProps}
        ref={provided.innerRef}
        inDragging={snapshot.isDragging}
      >
        {task.name}
      </Container>
    )}
  </Draggable>
);

export default KanbanTask;
interface ContainerProps {
  inDragging: boolean;
}
const Container = styled.article<ContainerProps>`
  flex-shrink: 0;
  height: 70px;
  background-color: ${({ inDragging }) => (inDragging ? '#313131' : '#202020')};
  padding: 5px;
  &:hover {
    background-color: #313131;
  }
  &:not(:last-child) {
    border-bottom: 1px solid rgb(49, 49, 49);
  }
`;
