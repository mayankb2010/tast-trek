import { useState } from "react";
import { useEffect } from "react";
import { Wrapper } from "../../../../common/Wrapper";
import useFirestore from "../../useFirestore";
import Carousel from "./Carousel";
import {
  StyledImagesList,
  Image,
  ImageWrapper,
  RemoveImageIcon,
  RemoveImage,
  ImagesListInfo,
} from "./styled";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteImage,
  selectImagesByTaskId,
  selectImagesStatus,
  setImages,
} from "../../imagesSlice";
import { toast } from "react-toastify";

const ImagesList = ({ taskId }) => {
  const { docs } = useFirestore("images");
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesStatus = useSelector(selectImagesStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setImages(docs));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docs]);

  const onRemoveImage = async (event, imageId, name) => {
    event.stopPropagation();
    dispatch(deleteImage({ imageId, name }));

    if (imagesStatus === "error") {
      toast.error("Oops. Something went wrong...");
    }
  };

  const filteredImages = useSelector((state) =>
    selectImagesByTaskId(state, taskId)
  ).reverse();
  return (
    <Wrapper>
      {filteredImages.length > 0 ? (
        <>
          <StyledImagesList>
            {filteredImages.map((image) => (
              <motion.li layout key={image.id}>
                <ImageWrapper onClick={() => setSelectedImage(image.url)}>
                  <Image
                    as={motion.img}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, opacity: 0.5 }}
                    src={image.url}
                    alt="storage image"
                  />
                  <RemoveImage
                    onClick={(event) =>
                      onRemoveImage(event, image.id, image.name)
                    }
                  >
                    <RemoveImageIcon />
                  </RemoveImage>
                </ImageWrapper>
              </motion.li>
            ))}
          </StyledImagesList>

          {selectedImage && (
            <Carousel
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
        </>
      ) : (
        <ImagesListInfo>
          You can only upload JPEG and PNG images with a maximum size of 2MB
        </ImagesListInfo>
      )}
    </Wrapper>
  );
};

export default ImagesList;
