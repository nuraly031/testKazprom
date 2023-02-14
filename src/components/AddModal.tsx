import { Dispatch, SetStateAction } from 'react';

import { useAppDispatch, useAppSelector } from '../Reducer';
import { resetData, setData } from '../Reducer/Data';
import { add } from '../Reducer/Datas';
import TextList from './TextList';

interface ISetActive {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
export default function AddModal({ active, setActive }: ISetActive) {
  const data = useAppSelector((state) => state.Data);
  const dispatch = useAppDispatch();
  const changeData = () => {
    if (data.length != 0) {
      dispatch(add(data));
      dispatch(resetData());
    }
  };
  return (
    <div>
      <div
        className={active ? 'modal active' : 'modal'}
        onClick={() => setActive(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="form">
            <input
              type="text"
              placeholder="Введите данные"
              value={data}
              onChange={(e) => dispatch(setData(e.target.value))}
            />
            <div className="modal__content__form">
              <button
                onClick={() => {
                  changeData();
                }}
              >
                ОК
              </button>
              <button onClick={() => setActive(false)}>Отмена</button>
            </div>
          </div>
        </div>
      </div>
      <TextList />
    </div>
  );
}
