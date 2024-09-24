import { CarouselImage } from "./styled";
import { motion } from "framer-motion";
import { Backdrop } from "../../../../../common/Backdrop";

const Carousel = ({ selectedImage, setSelectedImage }) => {
  return (
    <Backdrop
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setSelectedImage(null)}
    >
      <CarouselImage
        onClick={(event) => event.stopPropagation()}
        src={selectedImage}
        alt="image large view"
      />
    </Backdrop>
  );
};

export default Carousel;
