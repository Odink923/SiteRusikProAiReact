// src/components/FlipMagazine.js
import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './FlipMagazine.css';

export default function FlipMagazine() {
  const total = 12; // кількість реальних сторінок
  const full = Array.from({ length: total }, (_, i) => 
    `/pages/page-${String(i).padStart(2,'0')}.png`
  );

  // будуємо масив половинок: [ {src,side}, … ]
  const halves = full.flatMap(src => ([
    { src, side: 'left' },
    { src, side: 'right' }
  ]));

  const book = useRef();
  const [current, setCurrent] = useState(0);

  return (
    <div className="flip-container">
      <button
        className="btn prev"
        onClick={() => book.current.pageFlip().flipPrev()}
        disabled={current === 0}
      >‹</button>
      <button
        className="btn next"
        onClick={() => book.current.pageFlip().flipNext()}
        disabled={current >= halves.length - 2}
      >›</button>

      <HTMLFlipBook
        ref={book}
        width={500}             // ширина однієї половини
        height={700}            // висота сторінки
        size="fixed"
        usePortrait={false}
        showCover={false}
        drawShadow
        onFlip={e => setCurrent(e.data)}
      >
        {halves.map(({src,side}, i) => (
          <div className="page" key={i}>
            <div className={`crop ${side}`}>
              <img src={src} alt="" />
            </div>
          </div>
        ))}
      </HTMLFlipBook>

      <div className="page-counter">
        {Math.floor(current/2) + 1} / {total}
      </div>
    </div>
  );
}
