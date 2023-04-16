import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import Box1 from "../Components/Box1";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContextProvider";

export default function HomePage() {
  const {location} = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Box1 />
      <Box w="70%" margin="auto">
        <Heading size="sm" mt="5" textAlign="left">
          AKN TRANSFER {location!=="" ? location : "ANTALYA"}
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
        In addition to being the city, {location!=="" ? location : "ANTALYA"} is a  city with people from all over the country,and ready to embrace an evolving lifestyle.
          Surrounded by the 5 central district of Aksu, Döşemealtı, Kepez,Konyaaltı and Muratpaşa  
           has a vibrant social life  
            {location!=="" ? location :  " ANTALYA"}.{" "}
        </Text>
        <Heading size="sm" mt="5" textAlign="left">
         Easiest Way to Get VIP TRANSFER Service
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
         AKN TRANSFER allows you to hire a vip transfer with professional driver of your choice at an affordable rate. 
         Mail or call us and decide on the vip transfer duration, pickup location, and vip car type. 
         You can choise us to pick the vip transfer that is suited for your needs.
         Vip transfer make it possible for you to pick a transfer service which suits your purpose, whether it is a  when you are travelling alone, or a bigger spacious one when you are in a group. 
         The ANTALYA airport draws travellers from all over the world, and the easiest way to get on arrival is to hire a vip transfer which will be available as soon as you land.
        AKN Transfer provides you point to point service  also ensures safety while travelling in a group or individually.
        </Text>
        <Text fontSize="15px" textAlign="left" mt="1">
        </Text>
        <Heading size="sm" mt="5" textAlign="left">
          ABOUT AKN TRANSFER
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
        AKN Transfer has enabled to vip transfer  for travellers including BODRUM, MARMARİS, FETHİYE, KAŞ, GÖCEK DATÇA, KUŞADASI and ALAÇATI.
        </Text>
      </Box>
      <Box>
        <Image
        m="5"
          src="https://www.zoomcar.com/build/6b51f1464b17dbb1d002f16e26572662.png"
          alt="tagline"
          maxH="200px"
        />
      </Box>
      <Text align="center" mt="5" mb="2" fontSize="12px">
        © Copyright 2023 AKN TRANSFER ANTALYA. All rights reserved
      </Text>
    </div>
  );
}
