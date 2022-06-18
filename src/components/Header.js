import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { AppBar, Container, Toolbar, Link, Typography } from '@mui/material';
import Navigation from './Navigation';

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none">
              {title}
            </Link>
          </Typography>
          <Navigation/>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
