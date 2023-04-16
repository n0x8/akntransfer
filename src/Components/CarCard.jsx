import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

export default function CarCard({
  image,
  name,
  seats,
}) {
  return (
    <Box bg="white" borderRadius="0.25rem" mb="2">
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap={"wrap"}
        pr="2"
        pt="3"
        pb="2"
      >
        <Box w="23%">
          <Img src={image} alt="car1" width="auto" transform="scaleX(-1)" />
        </Box>
        <Box w="24%" textAlign="left">
          <Text fontWeight="bold" mb="1">
            {name}
          </Text>
          <Text fontSize="15px" opacity="0.5" mb="2">
              {seats}
          </Text>
        </Box>
        <Box w="20%" textAlign="left">
            <Button
              my="2"
              px="7"
              fontSize="13px"
              bg="white"
              border="1px solid green"
              _hover={{ bg: "green", color: "white" }}
              fontWeight="medium"
              onClick={() => {
              

              }}
            >
              <a  href="tel:+90 531 221 7271"> BOOK NOW</a>

            </Button>
        </Box>
      </Flex>
    </Box>
  );
}
