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

const Slider = ({ imageData }) => {
  const [images, setImages] = useState([])
  const imageCount = images.length - 1
  let title = useRef(null)
  const [imageNumber, setImageNumber] = useState(1)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => previousImage(),
  })
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    if (imageData.length > 0) setImages(imageData)
    else if (typeof imageData === "object") setImages([imageData])
  }, [imageData])

  const nextImage = () => {
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
              alt={image.title}
              id={i}
              activeimg={activeImg}
            />
          ))}
      </SliderContainer>
      <DesktopWrapper>
        <ControlsContainer>
          <ControlButton onClick={previousImage}>
            <PreviousIcon />
          </ControlButton>
          <BC3
            style={{
              color: `grey`,
            }}
            marginTop="md"
          >
            |
          </BC3>
          <ControlButton onClick={nextImage}>
            <NextIcon />
          </ControlButton>
        </ControlsContainer>
      </DesktopWrapper>
      <MobileWrapper imageControls>
        <BC3
          style={{
            color: `grey`,
          }}
          marginTop="md"
        >
          {imageNumber}/{images.length}
        </BC3>
        <BC3
          style={{
            color: `grey`,
          }}
          marginTop="md"
        >
          VIEW FULLSCREEN
        </BC3>
      </MobileWrapper>
    </div>
  ) : (
    <div></div>
  )
}

export default Slider
