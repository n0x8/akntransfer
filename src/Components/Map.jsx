import {
  AspectRatio,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function Map({ openMap, setMapStatus }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (openMap) {
      onOpen();
      setMapStatus(false);
    }
  });

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <BsArrowLeft fontSize="30px" onClick={onClose} />
          </ModalHeader>
          <ModalBody>
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="map"
                src="https://www.google.com/maps/d/embed?mid=1y5dsU7AT5xoprVit9NLiSuBMfCY&hl=en_US&ehbc=2E312F"
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
