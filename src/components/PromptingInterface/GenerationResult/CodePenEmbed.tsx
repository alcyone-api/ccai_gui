import React, { useEffect } from 'react';

const CodePenEmbed: React.FC = () => {
  useEffect(() => {
    // Dynamically inject the CodePen embed script
    const script = document.createElement('script');
    script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <p
      className="codepen"
      data-height="265"
      data-theme-id="light"
      data-default-tab="js,result"
      data-user="Mamboleoo"
      data-slug-hash="XWJPxpZ"
      style={{
        height: '265px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        margin: '1em 0',
        padding: '1em',
      }}
      data-pen-title="Walkers - How to"
    >
      <span>
        See the Pen{' '}
        <a href="https://codepen.io/Mamboleoo/pen/XWJPxpZ">Walkers - How to</a> by Louis Hoebregts (
        <a href="https://codepen.io/Mamboleoo">@Mamboleoo</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </span>
    </p>
  );
};

export default CodePenEmbed;