import React from 'react';

// export default Preview = (props) => {
export default (props) => {

  const text = props.text.split('');

  return (
    <div className="hide-scroll">
      {
        text.map((s, i) => {
          let color;
          if (i < props.userInput.length) {
            color = s === props.userInput[i] ? '#dfffa0' : '#fcbea4';
          }
          return (
              <span key={i} style={{ backgroundColor: color,
              fontWeight: 'bold' }}>{s}</span>
              // <span key={i} style={{ color: color }}>{s}</span>
          )
        })
      }
    </div>
  )
}