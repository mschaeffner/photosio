// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

import { remote } from 'electron'

import fs from 'fs'
import path from 'path'



type Props = {};

export default class Home extends Component<Props> {
  props: Props;

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
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <button onClick={() => this.showDialog() }>Select directory</button>

          {this.state.files.map(file =>
            <div key={file}>
              <img style={{width: "100px"}} src={file} />
            </div>
          )}

        </div>
      </div>
    );
  }
}
