import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageCaroussel({ images }) {
  return (
    <Carousel
      variant="dark"
      prevIcon={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0)",
            height: "100%",
            width: "60%",
            marginLeft: -37,
          }}
        >
          <FaChevronLeft size={30} />
        </div>
      }
      nextIcon={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0)",
            height: "100%",
            width: "60%",
            marginRight: -38,
          }}
        >
          <FaChevronRight size={30} />
        </div>
      }
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <figure className="caroussel-img">
            <Image
              src={image}
              alt="image-caroussel-item"
              loading="lazy"
              style={{ width: "100%" }}
            />
          </figure>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCaroussel;
