import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Post = ({ post, handleClick }) => {
  console.log('Post renderizou');
  return (
    <div className="post" key={post.id}>
      <h3 onClick={() => handleClick(post.title)}>{post.title}</h3>
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
  handleClick: PropTypes.func,
};

export const UseRef = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const input = useRef(null);

  console.log('Página renderizou');

  const handleClick = (value) => {
    setSearch(value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  useEffect(() => {
    input.current.focus();
  }, [search]);

  return (
    <div>
      <h2>useRef( );</h2>
      <input type="text" value={search} onChange={handleSearch} ref={input} />
      <p className="description" style={{ width: '80%', margin: '0 auto' }}>
        Com useRef, podemos criar uma referência para um elemento do DOM, e assim, manipularmos diretamente o elemento,
        sem precisar passar por um estado. Neste exemplo, criamos uma referência para o input, e ao clicar no título de
        um post, o título é inserido no input.
      </p>
      <div className="posts">
        {posts.length > 0 &&
          posts.map((post) => {
            return <Post post={post} key={post.id} handleClick={handleClick} />;
          })}
        {posts.length <= 0 && (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </div>
  );
};
