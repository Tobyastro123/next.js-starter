const Post = ({ id }) => {
  return (
  <div>YOUR ARE LOOKIGN AT POST #{id}</div>
  );
}

Post.getInitialProps = async ({ query }) => {
  return query;
};

export default Post;
