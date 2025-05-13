import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './FlipMagazine.css';

export default function FlipMagazine() {
  /* ====== вихідні дані ====================== */
  const total = 19;                                 // кількість реальних сторінок
  const full = Array.from({ length: total }, (_, i) =>
    `/pages/page-${String(i).padStart(2, '0')}.webp`  // <‑‑ виправив лапки на template‑literal
  );

  /* ====== будуємо children ================== */
  const children = [];
  children.push({ type: 'cover', src: full[0] });
  for (let i = 1; i < total - 1; i++) {
    children.push({ type: 'half', src: full[i], side: 'left' });
    children.push({ type: 'half', src: full[i], side: 'right' });
  }
  children.push({ type: 'cover', src: full[total - 1] });

  /* ====== стартова сторінка ================= */
  const P = 4;                                      // бажана сторінка (1 … total)
  let startPage;
  if (P === 1)       startPage = 0;
  else if (P === total) startPage = children.length - 1;
  else               startPage = 1 + 2 * (P - 2);

  const book = useRef();
  const [current, setCurrent] = useState(startPage);

  /* ====== адаптивний розмір сторінки ======== */
  const [pageSize, setPageSize] = useState({ w: 500, h: 700 });

  useEffect(() => {
    const calcSize = () => {
      const vw = window.innerWidth;
      const isMobile = vw < 768;

      /* 1‑сторінковий режим на телефонах – 90 % ширини екрану,
         але не більше, ніж оригінальні 500 px */
      const w = isMobile ? Math.min(vw * 0.9, 500) : 500;
      const h = w * 1.4;      // той самий аспект‑ретейшн 500×700

      setPageSize({ w, h });
    };

    calcSize();                        // одразу після першого рендеру
    window.addEventListener('resize', calcSize);
    return () => window.removeEventListener('resize', calcSize);
  }, []);

  /* ========================================== */
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
        width={pageSize.w}
        height={pageSize.h}
        size="stretch"        /* розтягується в межах контейнера */
        usePortrait={true}    /* на мобілці показує одну сторінку */
        showCover={true}
        drawShadow
        startPage={startPage}
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
