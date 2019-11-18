import React, { Component } from 'react';
import pattern1 from './data.js'
import {pattern2} from './data.js'
import Cell from'./Cell.js'

class Matrix extends Component {
 
  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  )

  
  genMatrix = () => (
    
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

export default Matrix;

Matrix.defaultProps = {values: pattern2}
