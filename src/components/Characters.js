import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import List from './List';

const Characters = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Rick and Morty Characters</Typography>
      <List />
    </Container>
  );
};

export default Characters;
