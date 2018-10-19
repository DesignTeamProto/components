import React from 'react';
// import styled from 'styled-components';
// import Image from '../../image.png';
// import { ChromePicker } from 'react-color';
import { Grid, Cell } from 'styled-css-grid';
import Card from '../card';
import MicroblogPost from '../MicroblogPost';
import MicroblogPostExtended from '../MicroblogPostExtended';
import MicroblogCreate from '../MicroblogCreate';
import ImageGrid from '../ImageGrid';
import TextFields from '../TextFields';
import Select from '../Select';
import Forms from '../Forms';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

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
    </Grid>
    );
  }
}

export default Main;
