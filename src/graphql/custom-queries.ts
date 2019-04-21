export const postDetailsFragment = `
fragment postDetails on Post {
    id
    title
}
`;

export const blogDetailsFragment = `
    fragment blogDetails on Blog {
        id
          name
          posts {
            nextToken
            items {
                ...postDetails
            }
          }
    }
    ${postDetailsFragment}
`;

export const blogsWithPostDataUsingFragment = `query blogsWithPostDataUsingFragment(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ...blogDetails
      }
      nextToken
    }
  }
  ${blogDetailsFragment}
  `;

export const blogsWithPostData = `query blogsWithPostData(
      $filter: ModelBlogFilterInput
      $limit: Int
      $nextToken: String
    ) {
      listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          name
          posts {
            nextToken
            items {
                id
            title
            }
          }
        }
        nextToken
      }
    }
    `;
