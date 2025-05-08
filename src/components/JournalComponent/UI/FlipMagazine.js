// src/components/FlipMagazine.js
import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './FlipMagazine.css';

export default function FlipMagazine() {
  const total = 19; // кількість реальних сторінок (включно з обкладинками)
  const full = Array.from({ length: total }, (_, i) =>
    `/pages/page-${String(i).padStart(2, '0')}.png`
  );

  // будуємо children: обкладинка, половинки внутрішніх, обкладинка
  const children = [];
  children.push({ type: 'cover', src: full[0] });
  for (let i = 1; i < total - 1; i++) {
    children.push({ type: 'half', src: full[i], side: 'left' });
    children.push({ type: 'half', src: full[i], side: 'right' });
  }
  children.push({ type: 'cover', src: full[total - 1] });

  // === Налаштування стартової сторінки ===
  const P = 4; // <-- бажаний номер оригінальної сторінки (1…total)
  let startPage;
  if (P === 1) startPage = 0;
  else if (P === total) startPage = children.length - 1;
  else startPage = 1 + 2 * (P - 2);

  const book = useRef();
  const [current, setCurrent] = useState(startPage);

  return (
    <div className="flip-container">
      <button
        className="btn prev"
        onClick={() => book.current.pageFlip().flipPrev()}
        disabled={current === 0}
      >
        ‹
      </button>
      <button
        className="btn next"
        onClick={() => book.current.pageFlip().flipNext()}
        disabled={current >= children.length - 2}
      >
        ›
      </button>

      <HTMLFlipBook
        ref={book}
        width={500}
        height={700}
        size="fixed"
        usePortrait={false}
        showCover={true}
        drawShadow
        startPage={startPage}      // <-- тут
        onFlip={(e) => setCurrent(e.data)}
        className="flip-book"
      >
        {children.map((item, i) =>
          item.type === 'cover' ? (
            <div className="page cover-page" key={i}>
              <img src={item.src} alt="Cover" />
            </div>
          ) : (
            <div className="page" key={i}>
              <div className={`crop ${item.side}`}>
                <img src={item.src} alt="" />
              </div>
            </div>
          )
        )}
      </HTMLFlipBook>

      <div className="page-counter">
        {Math.floor(current / 2) + 1} / {total}
      </div>
    </div>
  );
}
