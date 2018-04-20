import React from 'react';
import { remote } from 'electron';
import fs from 'fs';
import path from 'path';
import { Button, Input, Timeline } from 'antd';
import { PageWrapper, PageHeader, PageBody } from '../components/PageLayout';

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
      <PageWrapper>

        <PageHeader>
          <Button type="primary" onClick={() => this.showDialog() }>Import new photos</Button>
        </PageHeader>


        <PageBody>
          <Timeline style={{margin: '25px 0'}}>
            <Timeline.Item>
              <b>13.04.2018:</b> You imported 566 photos from <i>Document/photos/urlaub</i>.
            </Timeline.Item>
            <Timeline.Item>
              <b>24.03.2018:</b> You imported 2332 photos from <i>SD-Card</i>.
            </Timeline.Item>
            <Timeline.Item>
              <b>12.02.2018:</b> You imported 212 photos from <i>iPhone</i>.
            </Timeline.Item>
          </Timeline>

          <div>
            {this.state.files.map(file =>
              <div key={file} style={{display: 'flex'}}>

                <div style={{width: 200}}>
                  <img alt="alt" src={file} style={{width: '100%', border: '1px solid #DDD'}} />
                </div>

                <div style={{flex: 1}}>

                  <div>
                    <Input placeholder="Comment" />
                  </div>
                  <div>
                    <Input placeholder='Keywords' />
                  </div>

                </div>

              </div>
            )}
          </div>

        </PageBody>


      </PageWrapper>
    );
  }

}
