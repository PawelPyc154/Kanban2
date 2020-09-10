import { Board } from './models';

export const SET_DATA = '[BOARD] SET_DATA';

export interface SetData {
  type: typeof SET_DATA;
  payload: Board;
}
export const setData = (data: Board): SetData => ({
  type: SET_DATA,
  payload: data,
});

export type BoardActionTypes = SetData;
