import React, {Component} from 'react'
import Box from './Box'

import {Doughnut,Line} from 'react-chartjs-2';


class GraphWidget extends Component{
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    if (this.props.chart == 'Line') {
      return (
        <Box title={this.props.title} colorBox={this.props.colorBox}>
          <Line
            data={this.props.data}
            width={500}
            height={250}
            options={{maintainAspectRatio: true}}
           />
        </Box>
        );
    }
    else if(this.props.chart == 'Doughnut'){
      return (
        <Box title={this.props.title} colorBox={this.props.colorBox}>
          <Doughnut
            data={this.props.data}
            width={200}
            height={300}
            options={{maintainAspectRatio: false}}
           />
        </Box>
        );
    }

  }
}

export default GraphWidget;
