import React from 'react'

export default function GlowBackground({ mousePosition }) {
  return (
    <>
      <div className="absolute left-0 top-0 z-10 size-full opacity-100">
        <div
          className="GlowBackground_glowBackground"
          style={{
            "--x": `${mousePosition.x}px`,
            "--y": `${mousePosition.y}px`,
          }}
        >
          <div className="GlowBackground_glowBorderBg"></div>
        </div>
      </div>
    </>
  );
}
