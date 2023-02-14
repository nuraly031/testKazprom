import { useRef, useState } from 'react';
import { store, useAppDispatch } from '../Reducer';
import { setIndex } from '../Reducer/Line';

export default function TextList() {
  const texts = store.getState().Datas;
  const dispatch = useAppDispatch();

  const slides = window.document.querySelectorAll('.textLine');
  console.log(texts);

  slides.forEach((slide) =>
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    })
  );

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
  return (
    <div className="todo">
      <div className="todoText">
        {texts.map((text, index) => (
          <p
            className="textLine"
            key={index}
            onClick={() => dispatch(setIndex(index + 1))}
          >
            {text}
          </p>
        ))}
      </div>
      <button>Тест GraphQL</button>
    </div>
  );
}
