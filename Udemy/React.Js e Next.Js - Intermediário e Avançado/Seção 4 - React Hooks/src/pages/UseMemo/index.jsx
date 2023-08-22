import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Post = ({ post }) => {
  console.log('Post renderizou');
  return (
    <div className="post" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export const UseMemo = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  console.log('Página renderizou');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json));
    }, 5000);
  }, []);

  return (
    <div>
      <h2>useMemo( );</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <p className="description" style={{ width: '80%', margin: '0 auto' }}>
        Com useMemo, ao alterar o estado do componente da Página no Input acima, os Posts não são renderizados
        novamente, pois o useMemo só renderiza novamente o componente quando o estado do posts é alterado.
      </p>
      <div className="posts">
        {useMemo(() => {
          return (
            posts.length > 0 &&
            posts.map((post) => {
              return <Post post={post} key={post.id} />;
            })
          );
        }, [posts])}
        {posts.length <= 0 && (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </div>
  );
};
