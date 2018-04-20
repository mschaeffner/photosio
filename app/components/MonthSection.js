import React from 'react';

const MonthSection = ({title, files, imgWidth}) =>
  <div style={{ paddingBottom: 20, borderBottom: '1px solid #CCC' }}>
    <h4 style={{margin: '5px 0'}}>
      {title}
    </h4>
    <div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -5px'}}>
      {files.map(file =>
        <div key={file} style={{width: imgWidth, padding: 5}}>
          <img
            alt="alt"
            src={file}
            style={{width: '100%', border: '1px solid #DDD', cursor: 'pointer'}}
            onClick={() => alert('Show photo in fullscreen')}
          />
        </div>
      )}
    </div>
  </div>

export default MonthSection;
