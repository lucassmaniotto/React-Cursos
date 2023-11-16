import { Image } from "../Gallery/Image";

import styled from "styled-components";
import IconButton from "../IconButton";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Dialog = styled.dialog`
  position: absolute;
  width: 1156px;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

export const ModalZoom = ({ photo, onClose, onToggleFavorite }) => {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <Dialog open={!!photo} onClose={onClose}>
            <Image
              expanded={true}
              photo={photo}
              onToggleFavorite={onToggleFavorite}
            />
            <form method="dialog">
              <IconButton>
                <img src="/icons/fechar.png" alt="Icone de fechar" />
              </IconButton>
            </form>
          </Dialog>
        </>
      )}
    </>
  );
};
