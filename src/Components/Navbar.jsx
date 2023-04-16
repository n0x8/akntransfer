import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  useDisclosure,
  // eslint-disable-next-line
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephone, BsLayoutTextSidebar } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import NavbarStyles from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

// eslint-disable-next-line

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const { isAuth, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
        className={NavbarStyles.header}
      >
        <Flex alignItems="center" gap="5">
          <button ref={btnRef} onClick={onOpen}>
            <AiOutlineMenu />
          </button>
          <Heading size="md" className={NavbarStyles.logo}>
            <Link to="/">AKN TRANSFER</Link>
          </Heading>
        </Flex>
        <Flex alignItems="center" gap="10">
          <a href="http://akntransfer.com/blog">
            <Flex py="2" px="4" bg="white" color="black" borderRadius="1.5rem">
              <img
                src="http://akntransfer.com/e222e7ff96ffdd76290118718d52d71f.svg"
                alt="icon"
              />
              TOUR BLOG
            </Flex>
          </a>
          <a href="https://www.akntransfer.com">
            <h1>SUPPORT</h1>
          </a>
          
        </Flex>
      </Flex>

      {/* drawer  */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody border="1px solid black" p="0" m="0">
          
            <Link to="/">
              
            </Link>
            <a href="https://akntransfer.com">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <img
                  src="http://akntransfer.com/e222e7ff96ffdd76290118718d52d71f.svg"
                  alt="icon"
                />
                TOUR BLOG
              </Flex>
            </a>
            <a href="https://www.akntransfer.com">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsLayoutTextSidebar />
                AKN Transfer Service Policies
              </Flex>
            </a>
            <a href="https://www.akntransfer.com">
              
            </a>
            <a href="+90 531 221 7271">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <img
                  src="http://akntransfer.com/incoming.svg"
                  alt="icon"
                />
                <table>
  <tr onclick="window.open('');">
  <a  href="tel:+90 531 221 7271"> BOOK NOW</a>
  </tr>
</table>


              </Flex>
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
