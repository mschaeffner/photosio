import React from 'react';
import fs from 'fs'
import path from 'path'
import os from 'os';
import { Slider } from 'antd';
import MonthSection from '../components/MonthSection';

const DATA_DIR = path.resolve(os.homedir(), 'photosio/data');

export default class PhotosPage extends React.Component {

  state = {
    files:[],
    sliderValue: 7
  };

  componentDidMount() {
    fs.readdir(DATA_DIR, (err, files) => {
      if(err) {
        console.log(err)
      } else {
        const imageFiles = files
          .filter(f => path.extname(f).toLowerCase() === '.jpg')
          .map(f => path.resolve(DATA_DIR, f))
        this.setState({ files: imageFiles })
      }
    })
  }

  onSlideChange(value) {
    this.setState({sliderValue: value});
  }

  render() {
    const imgWidth = (100 / this.state.sliderValue) + '%';

    return (
      <div>

        <div style={{width: '100px'}}>
          <Slider
            min={3}
            max={10}
            defaultValue={this.state.sliderValue}
            onChange={(value) => this.onSlideChange(value)}
            tipFormatter={null}
          />
        </div>

        <MonthSection title='April 2018' files={this.state.files} imgWidth={imgWidth}/>
        <MonthSection title='March 2018' files={this.state.files} imgWidth={imgWidth}/>
        <MonthSection title='Febraury 2018' files={this.state.files} imgWidth={imgWidth}/>
        <MonthSection title='January 2018' files={this.state.files} imgWidth={imgWidth}/>
        <MonthSection title='December 2017' files={this.state.files} imgWidth={imgWidth}/>

      </div>
    );
  }

}
