import React from 'react';
import { remote } from 'electron';
import fs from 'fs';
import path from 'path';
import { Button, Checkbox, Input } from 'antd';

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
    return (
      <div>
        <Button type="primary" onClick={() => this.showDialog() }>Import new photos</Button>

        <div>
          {this.state.files.map(file =>
            <div key={file} style={{display: 'flex'}}>

              <div style={{width: 50}}>
                <Checkbox checked={true} onChange={(e) => console.log(e.target.checked)} />
              </div>

              <div style={{width: 200}}>
                <img alt="alt" src={file} style={{width: '100%', border: '1px solid #DDD'}} />
              </div>

              <div style={{flex: 1}}>

                <div>
                  <Input placeholder="Title" />
                </div>
                <div>
                  <Input placeholder='Tags' />
                </div>
                <div>
                  <Input placeholder='Location' />
                </div>


              </div>


            </div>
          )}
        </div>

      </div>
    );
  }

}
