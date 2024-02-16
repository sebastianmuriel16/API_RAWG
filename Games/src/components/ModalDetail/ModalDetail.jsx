import { Carrusel } from "../Carrusel/Carrusel";
import { useContext, useEffect } from "react";
import { CloseContext } from "../../Context/close";
import { IconCloseCircle } from "../Icons/Icons";
import { useScreenshots } from "../../Hooks/useScreenshots";
import "./modalDetail.css";
function ModalDetail({ data, images }) {
  const { close, setClose } = useContext(CloseContext);
  if (!close) return null;

  const handleClose = () => {
    setClose(false);
  };

  return (
    <div className="modal">
      <IconCloseCircle onClick={handleClose} className="close" />
      <div className="modal-content">
        <Carrusel data={images} />
      </div>
    </div>
  );
}

export { ModalDetail };
