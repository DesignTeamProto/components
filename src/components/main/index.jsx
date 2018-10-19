import React from 'react';
// import styled from 'styled-components';
// import Image from '../../image.png';
// import { ChromePicker } from 'react-color';
import { Grid, Cell } from 'styled-css-grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '../card';
import MicroblogPost from '../MicroblogPost';
import MicroblogPostExtended from '../MicroblogPostExtended';
import MicroblogCreate from '../MicroblogCreate';
import ImageGrid from '../ImageGrid';
import Badge from '../Badge';

// const ContentLeft = styled.div`
//   grid-column: col-start 1 / span 6;
// `;

class Main extends React.Component {
  render() {
    return (
      <Grid role="main" columns={12} gap={'2rem'}>
          <Cell width={6}>
            <MicroblogCreate />
            <MicroblogPost />
            <MicroblogPostExtended />
          </Cell>
          
          <Cell width={6}>
              {/* <ChromePicker
              color={ this.state.background }
              onChange={ this.handleChange }
            /> */}
            <ImageGrid />
            <Card />
            <Card />
          </Cell>
          <Badge color="primary" badgeContent={4}>
            <Button variant="contained">Button</Button>
          </Badge>
    </Grid>
    );
  }
}

export default Main;
