import React from "react"
import { graphql } from "gatsby"
import { Grid, Box, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({ data }) => {
  const { posts } = data.blog

  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ my: 20 }}>
            <Typography variant="h1" align="center">
              Hi.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    blog: allMdx {
      posts: edges {
        node {
          slug
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            author
          }
          excerpt
          id
        }
      }
    }
  }
`
export default Home;
