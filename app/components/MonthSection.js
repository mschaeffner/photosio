import React from 'react';

const MonthSection = ({title, files, imgWidth}) =>
  <div>
    <h2 style={{borderTop: '1px solid #DDD', margin: '5px 0 0 5px', paddingTop: '20px'}}>
      {title}
    </h2>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {files.map(file =>
        <div key={file} style={{width: imgWidth, padding: 5}}>
          <img alt="alt" src={file} style={{width: '100%', border: '1px solid #DDD'}} />
        </div>
      )}
    </div>
  </div>

export default MonthSection;
