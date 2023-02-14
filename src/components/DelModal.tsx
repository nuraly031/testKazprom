import { Dispatch, SetStateAction } from 'react';
import { store, useAppDispatch } from '../Reducer';
import { del } from '../Reducer/Datas';

interface ISetActive {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function DelModal({ active, setActive }: ISetActive) {
  const data = store.getState().Line;

  const dispatch = useAppDispatch();
  const deliteLine = () => {
    if (data > 0) {
      dispatch(del(data - 1));
      setActive(false);
    }
  };
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div className="modal__block">
        <h3>Удаляем эту строчку?</h3>
        <div className="modal__buttons" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => deliteLine()}>Да</button>
          <button onClick={() => setActive(false)}>Нет</button>
        </div>
      </div>
    </div>
  );
}
