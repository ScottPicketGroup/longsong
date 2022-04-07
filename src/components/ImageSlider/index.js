import React, { useRef, useState, useEffect } from "react"
import { BC3 } from "../global-styles/typography.css"
import { gsap } from "gsap"
import { useSwipeable } from "react-swipeable"
import {
  SliderContainer,
  ControlButton,
  SliderImage,
  ControlsContainer,
} from "./index.css"
import NextIcon from "./Controls/NextIcon"
import PreviousIcon from "./Controls/PreviousIcon"

import { DesktopWrapper, MobileWrapper } from "../global-styles/containers.css"

const Slider = ({ imageData, hero, aspectRatio }) => {
  const [images, setImages] = useState([])
  const [imageCount, setImageCount] = useState(0)
  let title = useRef(null)
  const [imageNumber, setImageNumber] = useState(1)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => previousImage(),
  })
  const [activeImg, setActiveImg] = useState(0)


  useEffect(() => {
    if (imageData.length > 0) {
      setImages(imageData)
      setImageCount(imageData.length - 1)
    } else if (typeof imageData === "object") {
      setImages([imageData])
      setImageCount(0)
    }
  }, [imageData])

  const nextImage = () => {
    if (imageNumber === images.length) return
    gsap.fromTo(
      title,
      0.1,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
      }
    )
    gsap.fromTo(
      title,
      0.3,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 0.3,
      }
    )

    setTimeout(() => {
      if (activeImg < imageCount) {
        setActiveImg(activeImg + 1)
        setImageNumber(imageNumber + 1)
      } else {
        setActiveImg(0)
        setImageNumber(1)
      }
    }, 200)
  }

  const previousImage = () => {
    if (imageNumber === 1) return
    gsap.fromTo(
      title,
      0.1,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
      }
    )
    gsap.fromTo(
      title,
      0.3,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 0.3,
      }
    )
    setTimeout(() => {
      if (activeImg > 0) {
        setActiveImg(activeImg - 1)
        setImageNumber(imageNumber - 1)
      } else {
        setActiveImg(imageCount)
        setImageNumber(imageCount + 1)
      }
    }, 200)
  }

  return images ? (
    <div {...handlers}>
      <SliderContainer ref={el => (title = el)}>
        {images &&
          images.map((image, i) => (
            <SliderImage
              key={i}
              image={image.gatsbyImageData}
              alt={image.title ? image.title : "slider-img"}
              id={i}
              activeimg={activeImg}
              aspectratio={aspectRatio}
            />
          ))}
      </SliderContainer>
      {imageCount > 0 && !hero && (
        <>
          <DesktopWrapper>
            <ControlsContainer>
              <ControlButton onClick={previousImage}>
                <PreviousIcon />
              </ControlButton>
              <BC3 style={{ color: `grey` }} marginTop="md">
                |
              </BC3>
              <ControlButton onClick={nextImage}>
                <NextIcon />
              </ControlButton>
            </ControlsContainer>
          </DesktopWrapper>
          <MobileWrapper imageControls>
            <BC3 style={{ color: `grey` }} marginTop="md">
              {imageNumber}/{images.length}
            </BC3>
          </MobileWrapper>
        </>
      )}
    </div>
  ) : (
    <div></div>
  )
}

export default Slider
