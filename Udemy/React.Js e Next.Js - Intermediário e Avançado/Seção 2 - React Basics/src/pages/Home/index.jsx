import { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    setLoading(true);

    const postsAndPhotos = await loadPosts();

    setAllPosts(postsAndPhotos);
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setLoading(false);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    setPosts([...posts, ...nextPosts]);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    : posts;

  return (
    <section className="container">
      <div className="search-container">
        <TextInput searchValue={searchValue} handleChange={handleChange} />
        {!searchValue && !loading && <Button text="Load Posts" onClick={loadMorePosts} disabled={noMorePosts} />}
      </div>
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}{' '}
      {!loading && filteredPosts.length === 0 && <h1 className="spinner-title">Sorry, no posts found :(</h1>}
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
    </section>
  );
};
