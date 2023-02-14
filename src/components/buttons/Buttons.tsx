import React, { useState } from 'react';
import AddModal from '../AddModal';
import DelModal from '../DelModal';

export default function Buttons() {
  const [addModalActive, setAddModalActive] = useState<boolean>(false);
  const [delModalActive, setDelModalActive] = useState<boolean>(false);
  return (
    <div className="App">
      <button className="button" onClick={() => setAddModalActive(true)}>
        Добавить
      </button>
      <button className="button" onClick={() => setDelModalActive(true)}>
        Удалить
      </button>

      <AddModal active={addModalActive} setActive={setAddModalActive} />
      <DelModal active={delModalActive} setActive={setDelModalActive} />
    </div>
  );
}
