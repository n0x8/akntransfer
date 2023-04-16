import {
  Box,
  Flex,
  Grid,
  GridItem,
 
  Text,
} from "@chakra-ui/react";
import React from "react";


export default function SortAndFilters() {
  return (
    <Box w="28%" px="3" py="3" bg="white" borderRadius="0.25rem" shadow="base">
      <Flex alignItems="center" justifyContent="space-between" mb="2">
      </Flex>
      {/* seats */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5385/5385900.png"
              alt="7 seater"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">7 Seater</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5385/5385900.png"
              alt="9 seater"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">9 Seater</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5385/5385900.png"
              alt="11 seater"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">11 Seater</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
