import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Paragraph from '@/components/Paragraph';
import {
  List,
  ListItem,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Container,
  Divider,
  Stack,
  Box,
  Grid,
} from '@/components/mui';
import Layout from '@/components/Layout';
import Heading from '@/components/Heading';
import { AllPosts } from '@/lib/hygraph/queries';

export default function Blog({ ssd = [] }) {
  console.log('ssd', ssd);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Paragraph component="h2" variant="h3" sx={{ textAlign: 'center' }}>
          Beauty Services
        </Paragraph>
        <Paragraph
          Paragraph
          component="h2"
          variant="h6"
          sx={{ textAlign: 'center' }}
        >
          Discover everything esteelauder.co.uk has to offer— from the comfort
          of your own home.
        </Paragraph>

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 6, md: 12, lg: 12 }}
        >
          {ssd.map(({ id, title, slug, heroImage: { url } }) => (
            <Grid item xs={4} sm={8} md={6} key={id}>
              <Card component={'article'} sx={{ width: '100%' }}>
                <CardMedia
                  sx={{ display: 'grid', placeContent: 'center', marginTop: 5 }}
                >
                  <Image alt={title} src={url} width="300" height="300" />
                </CardMedia>
                <CardContent>
                  <Heading component="h2" variant="h5">
                    {title}
                  </Heading>
                </CardContent>
                <CardActions>
                  <Link href={`/blog/${slug}`}>Read more...</Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': `application/json; charset="UTF-8`,
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({
      query: AllPosts,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(allPosts);
  const posts = allPosts.data.sevices;
  console.log(posts);
  return {
    props: {
      ssd: posts,
    },
  };
};
