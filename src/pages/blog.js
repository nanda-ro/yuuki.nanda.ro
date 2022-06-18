import React from "react"
import { graphql } from "gatsby"
import { Grid, Container, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = ({ data }) => {
  const { posts } = data.blog

  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" component="div" align="center">
            Blog
          </Typography>
          <Container maxWidth="md" sx={{ my: 5 }}>
            <Grid container spacing={2}>
              {posts.map(post => (
                <Grid item xs={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href={`/blog/${post.node.slug}/`}>
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {post.node.frontmatter.title}
                        </Typography>
                        <Typography variant="body2" align="right">
                          {post.node.frontmatter.date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {post.node.excerpt}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          </Grid>
        </Grid>
      <Footer/>
    </>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    blog: allMdx {
      posts: edges {
        node {
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            author
          }
          excerpt
          id
          slug
        }
      }
    }
  }
`
export default Blog;
