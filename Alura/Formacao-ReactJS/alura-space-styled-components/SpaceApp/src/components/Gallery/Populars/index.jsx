import Title from "../../Title";

import photos from "./popular-photos.json";

import styled from "styled-components";

const PhotoColumns = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;

  &:hover {
    background-color: #c98cf1;
    color: #fff;
  }
`;

export const Populars = () => {
  return (
    <section>
      <Title $align="center">Populares</Title>
      <PhotoColumns>
        {photos.map((photo) => (
          <Image key={photo.id} src={photo.path} alt={photo.alt} />
        ))}
      </PhotoColumns>
      <Button>Ver mais</Button>
    </section>
  );
};
