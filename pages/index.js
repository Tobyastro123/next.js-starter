import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data } = res;
    return { posts: data };
  }

  render() {
    const { posts } = this.props;
    return (
    <div>
      <h1>This is the index page</h1>
      {
        posts.map(post => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))
      }
    </div>
    );
  }
}

export default Index;

// =====================================================================
// COMMENTED CODE IS THE SAME IMPLEMENTATION WITH A FUNCTIONAL COMPONENT
// =====================================================================

// const Index = ({ posts }) => {
//   return (
//     <div>
//       <h1>This is the index page</h1>
//       {
//         posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))
//       }
//     </div>
//   );
// };

// Index.getInitialProps = async () => {
//   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   const { data } = res;
//   return { posts: data };
// }

// export default Index;
