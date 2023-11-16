import Title from "../Title";
import { Image } from "./Image";
import { Populars } from "./Populars";
import { Tags } from "./Tags";

import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImageContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(424px, 1fr));
  grid-gap: 16px;
`;

export const Gallery = ({
  photos = [],
  setTag,
  onPhotoClick,
  onToggleFavorite,
}) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela Galeria</Title>
          <ImageContainer>
            {photos.map((photo) => (
              <Image
                key={photo.id}
                photo={photo}
                onZoomClick={onPhotoClick}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </ImageContainer>
        </FluidSection>
        <Populars />
      </GalleryContainer>
    </>
  );
};
