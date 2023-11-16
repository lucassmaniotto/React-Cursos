import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Banner } from "./components/Banner";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

import photos from "./photos.json";

import bannerBackground from "./assets/banner.png";

import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import { ModalZoom } from "./components/ModalZoom";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 48px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);

  const onToggleFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        isFavorite: !selectedPhoto.isFavorite,
      });
    }
    setGalleryPhotos(
      galleryPhotos.map((galleryPhotos) => {
        return {
          ...galleryPhotos,
          isFavorite:
            galleryPhotos.id === photo.id
              ? !photo.isFavorite
              : galleryPhotos.isFavorite,
        };
      })
    );
  };

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle =
        !filter || photo.title.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filterByTitle;
    });
    setGalleryPhotos(filteredPhotos);
  }, [filter, tag]);

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery
              photos={galleryPhotos}
              onPhotoClick={(photo) => setSelectedPhoto(photo)}
              onToggleFavorite={onToggleFavorite}
              setTag={setTag}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onToggleFavorite={onToggleFavorite}
      />
      <Footer />
    </GradientBackground>
  );
};

export default App;
