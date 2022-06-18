import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Grid, Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styles from './blog-post.module.css';

const BlogPost = ({ data }) => {
  const post = data.mdx

  return (
    <>
      <Header />
      <Container>
      <Grid container maxWidth="lg">
        <Grid item xs={12} sm={8}>
          <Container>
            <Box sx={{ my: 4 }}>
            <Typography variant="h4">{post.frontmatter.title}</Typography>
            <Typography variant="body1">
              <MDXProvider>
                <MDXRenderer>
                  {post.body}
                </MDXRenderer>
              </MDXProvider>
            </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Sidebar date={post.frontmatter.date} />
        </Grid>
      </Grid>
      </Container>
      <Footer />
    </>
  );
};

export const query = graphql`
  query BlogQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`

export default BlogPost;
