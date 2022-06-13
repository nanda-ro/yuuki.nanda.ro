import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Typography } from '@mui/material';

const Copyright = () => {
  const data = useStaticQuery(graphql`
    query CopyrightQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
        {title}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
