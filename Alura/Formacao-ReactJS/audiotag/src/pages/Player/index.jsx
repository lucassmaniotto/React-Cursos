import Banner from 'components/Banner';
import Title from 'components/Title';

import NotFound from 'pages/NotFound';


import styles from './Player.module.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Player() {

  const [video, setVideo] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/lucassmaniotto/api-audiotag/videos?id=${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setVideo(...data)
      })
  }, [params.id]);


  if (!video) return (<NotFound />);

  return (
    <>
        <Banner image="player" />
        <Title>
          <h1>Clipes</h1>
        </Title>
        <iframe
          className={styles.video}
          width="80%"
          height="80%"
          src={video.link}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </>
  )
}
