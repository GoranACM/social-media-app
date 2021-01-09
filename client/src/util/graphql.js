import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
      likes {
        id
        username
      }
    }
  }
`;
