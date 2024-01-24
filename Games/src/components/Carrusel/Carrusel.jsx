import './carrusel.css'
import { useEffect, useRef, useState } from 'react'
import { IconArrowLeftSLine } from '../../components/Icons/Icons'
import { IconArrowRightSLine } from '../../components/Icons/Icons'

const images = [
  {
    id: 1827221,
    image:
      'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
  },
  {
    id: 1827222,
    image:
      'https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg',
  },
  {
    id: 1827223,
    image:
      'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
  },
  {
    id: 1827225,
    image:
      'https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg',
  },
]

function Carrusel() {
  const listRed = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const listNode = listRed.current
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex]

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth",
            })
        }
    }, [currentIndex])

    const scrollToImage = (direction) => {
        if (direction === "prev") {
            setCurrentIndex(curr =>{
                const isFirstSlide = curr === 0
                return isFirstSlide ? 0: curr - 1
            })
        }else {
            setCurrentIndex(curr =>{
                const isLastSlide = curr === images.length - 1
                return isLastSlide ? curr : curr + 1
            })
        }
    }

  return (
    <div className="carrusel-container">
      <div className="slider-carrusel">
        <span className='left-arrow' onClick={() => scrollToImage('prev')}> <IconArrowLeftSLine /> </span>
        <span className='right-arrow' onClick={() => scrollToImage('next')}> <IconArrowRightSLine /></span>
        <div className="container-images">
          <ul ref={listRed}>
            {images.map((image) => (
              <li key={image.id}>
                <img src={image.image} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { Carrusel }
