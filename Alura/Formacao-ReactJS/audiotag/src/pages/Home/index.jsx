import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';

import { useEffect, useState } from 'react';

import styles from './Home.module.css';

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/lucassmaniotto/api-audiotag/videos')
      .then((response) => response.json())
      .then((data) => {
        setVideos(data)
      })
  }, []);

  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar suas bandas e clipes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id}/>
        ))}
      </section>
    </>
  )
}