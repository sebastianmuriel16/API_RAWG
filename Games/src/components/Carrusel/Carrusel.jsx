import { useScreenshots } from "../../Hooks/useScreenshots";
import { useContext, useEffect, useState } from "react";
import { CloseContext } from "../../Context/close";
import { IconArrowLeftSLine } from "../../components/Icons/Icons";
import { IconArrowRightSLine } from "../../components/Icons/Icons";
import { IconCloseCircle } from "../../components/Icons/Icons";
import "./carrusel.css";

function Carrusel({ id }) {
  const { close, setClose } = useContext(CloseContext);
  const { getResults, images } = useScreenshots();
  const [loading, setLoading] = useState(true);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    getResults(id);
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Después del tiempo determinado, cambia loading a false
    }, 500); // Cambia 3000 a la cantidad de milisegundos que deseas que dure el esqueleto de carga

    return () => clearTimeout(timer); // Limpia el temporizador para evitar fugas de memoria
  }, []);

  const handleClose = () => {
    setClose(true);
  };

  const nextSlide = () => {
    setSlide((prevSlide) => {
      return prevSlide === images?.length - 1 ? 0 : prevSlide + 1;
    });
  };

  const prevSlide = () => {
    setSlide((prevSlide) => {
      return prevSlide === 0 ? images?.length - 1 : prevSlide - 1;
    });
  };

  return (
    <main className={close ? "carousel-close" : "main-carousel"}>
      <div className="carousel">
        <IconCloseCircle className="close" onClick={handleClose} />
        <IconArrowLeftSLine className="arrow arrow-left" onClick={prevSlide} />

        {loading ? (
          <div className="skeleton"></div>
        ) : (
          images.map((item, index) => {
            return (
              <img
                className={slide === index ? "slide" : "slide-hidden"}
                key={item.id}
                src={item.image}
                alt={item.id}
              />
            );
          })
        )}
        <IconArrowRightSLine
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
    </main>
  );
}

export { Carrusel };
