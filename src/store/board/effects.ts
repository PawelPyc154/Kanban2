import { ThunkDispatch } from 'redux-thunk';
import * as BoardActions from './actions';

export default () => async (dispatch: ThunkDispatch<{}, {}, BoardActions.BoardActionTypes>) => {
  const data = {
    columns: [
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
    ],
    tasks: [
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
    ],
  };
  dispatch(BoardActions.setData(data));
};
