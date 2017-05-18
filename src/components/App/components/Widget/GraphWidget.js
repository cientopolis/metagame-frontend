import React, {Component} from 'react'
import Box from './Box'

import {Doughnut} from 'react-chartjs-2';


class GraphWidget extends Component{

  render() {
    return (
      <Box title="Player's distribution">
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

export default GraphWidget;
