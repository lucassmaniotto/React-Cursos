import Banner from 'components/Banner'
import Card from 'components/Card';
import styles from './Home.module.css';

import posts from 'json/posts.json';


export default function Home() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Card post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}
