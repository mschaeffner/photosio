import React from 'react';
import { remote } from 'electron';
import fs from 'fs';
import path from 'path';
import { Slider, Button } from 'antd';

export default class ImportsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files:[]
    }
  }

  showDialog() {
    remote.dialog.showOpenDialog(
      {properties: ['openDirectory']},
      (filePaths) => this.handleSelectedPath(filePaths[0])
    )
  }

  onSlideChange(value) {
    this.setState({sliderValue: value});
  }

  handleSelectedPath(dir) {
    fs.readdir(dir, (err, files) => {
      if(err) {
        console.log(err)
      } else {
        const imageFiles = files
          .filter(f => path.extname(f).toLowerCase() === '.jpg')
          .map(f => path.resolve(dir, f))
        this.setState({ files: imageFiles })
      }
    })
  }

  render() {

    const imgWidth = (100 / this.state.sliderValue) + '%';

    return (
      <div>
        <h2>Imports</h2>

        <Slider
          min={3}
          max={10}
          defaultValue={5}
          onChange={(value) => this.onSlideChange(value)}
          tipFormatter={null}
        />

        <Button type="primary" onClick={() => this.showDialog() }>From directory</Button>

        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {this.state.files.map(file =>
            <div key={file} style={{width: imgWidth, padding: 10}}>
              <img alt="alt" src={file} style={{width: '100%', border: '1px solid #DDD'}} />
            </div>
          )}
        </div>

      </div>
    );
  }

}
