import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SortAndFilters from "../Components/SortAndFilters";
import CarCard from "../Components/CarCard";
import Navbar from "../Components/Navbar";
import axios from "axios";
import SmallScreenCarCard from "../Components/SmallScreenCarCard";


async function addToBooking(carId) {
  // get token from ls
  let token = localStorage.getItem("token");

  await axios
    .post(
      "",
      {
        car_id: carId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    )
    .then((res) => {
      alert("car booking successful");
    })
    .catch((err) => {
      console.log(err);
    });

}

export default function ResultsPage() {
  const [isSmallerThan950] = useMediaQuery("(max-width: 950px)");
  const [isSmallerThan650] = useMediaQuery("(max-width: 650px)");

  // for storing cars data
  const [carsArray, setCarsArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/akntransfer/json/posts")
      .then((res) => {
        setCarsArray(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Flex justifyContent="center" gap="4" py="3" flexWrap="wrap" bg="#f5f5f5">
        {!isSmallerThan950 && <SortAndFilters />}
        {/* car list  */}
        <Box w={!isSmallerThan950 ? "68%" : "95%"}>
          {/* top section */}
          {!isSmallerThan650 && (
            <Flex justifyContent="center">
            </Flex>
          )}
          <br />
          {/* car list data */}
          <Box
            maxH={!isSmallerThan650 && "500px"}
            overflow={!isSmallerThan650 && "auto"}
          >
            {!isSmallerThan650
              ? carsArray.map((car) => (
                  <CarCard
                    key={car._id}
                    image={car.image}
                    name={car.name}
                    seats={car.seats}
                    carId={car._id}
                  
                  />
                ))
              : carsArray.map((car) => (
                  <SmallScreenCarCard
                    key={car._id}
                    image={car.image}
                    name={car.name}
                    transmission={car.transmission}
                    fuel={car.fuel}
                    seats={car.seats}
                    ratings={car.ratings}
                    kms={car.kms}
                    address={car.address}
                    discount_price={car.discount_price}
                    original_price={car.original_price}
                    carId={car._id}
                    addToBooking={addToBooking}
                  />
                ))}
          </Box>
        </Box>
      </Flex>
    </>
  );
}
