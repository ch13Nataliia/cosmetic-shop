import { gql } from 'graphql-request';
import Image from 'next/image';
const AllPosts = gql`
  query AllPosts {
    sevices {
      body
      id
      slug
      title
      heroImage {
        url
        height
        width
      }
    }
  }
`;
const SinglePost = `
query SinglePost($slug: String!) {
  sevice(where: {slug: $slug}) {
    slug
    title
    body,
    id,
    heroImage {
      url
    }
  }
}
`;

export { AllPosts, SinglePost };
