import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class GridListObject extends React.Component {
  render() {
    return (
      <GridList cellHeight={160} cols={3}>
        {this.props.content ?
          this.props.content.map(function (data, i) {
            return <GridListTile key={i} cols={1}>
              <img src={data.image} alt={data.alt} className="gridListTile-image"/>
            </GridListTile>
          })
          :
          <React.Fragment />
        }
      </GridList>
    );
  }
}
export default GridListObject;
