import React from 'react';
import Image from 'next/image';

export default function GameItem() {
  return (
    <div className="featured-game-card position-relative">
      <a href="./src/detail.html">
        <div className="blur-sharp">
          <Image className="thumbnail" src="/img/Thumbnail-1.png" width={205} height={270} alt="thumbnail" />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image src="/icon/console.svg" width={54} height={36} alt="console" />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">Super Mechs</p>
              <p className="fw-light text-white m-0">Mobile</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
