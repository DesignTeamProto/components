import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import Card from '../card';
import MicroblogPost from '../MicroblogPost';
import MicroblogPostExtended from '../MicroblogPostExtended';
import MicroblogCreate from '../MicroblogCreate';
import ImageGrid from '../ImageGrid';

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
        {}
        <ImageGrid />
        <Card />
        <Card />
      </Cell>
    </Grid>
    );
  }
}

export default Main;