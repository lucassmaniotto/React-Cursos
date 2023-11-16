import IconButton from "../../IconButton";

import { styled } from "styled-components";

const Figure = styled.figure`
  width: ${(props) => (props.$expanded ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
      font-size: 12px !important;
      font-weight: 100 !important;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = ({
  photo,
  expanded = false,
  onZoomClick,
  onToggleFavorite,
}) => {
  const favoriteIcon = photo.isFavorite
    ? "/icons/favorito-ativo.png"
    : "/icons/favorito.png";

  return (
    <Figure $expanded={expanded} id={`photo-${photo.id}`}>
      <img src={photo.path} alt={photo.title} />
      <figcaption>
        <h3>{photo.title}</h3>
        <Footer>
          <h4>{photo.font}</h4>
          <IconButton onClick={() => onToggleFavorite(photo)}>
            <img src={favoriteIcon} alt="Icone de favorito" />
          </IconButton>
          {!expanded && (
            <IconButton
              aria-hidden="expanded"
              onClick={() => onZoomClick(photo)}
            >
              <img src="/icons/expandir.png" alt="Icone de expandir" />
            </IconButton>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
};
