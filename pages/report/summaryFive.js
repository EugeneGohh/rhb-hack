import React from "react";
import Head from "next/head";
import {
  Flex,
  Image,
  Text,
  Button,
  HStack,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import Carousel from "framer-motion-carousel";
import Link from "next/link";
import NextButton from "../../components/NextButton";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";

const colors = ["#f90", "#ef0", "#e0f"];

function SummaryFive() {
  const [number, setNumber] = useState();
  return (
    <div>
      <Head>
        <title>ZEE BY RHB App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        align-items="center"
        padding="5rem 2rem 0 2rem"
        className="bg-[#6BCDE7] m-0 p-0 h-screen"
      >
        <Text fontSize="xl" color="brand.darkblue">
          We can always improve on ourselves{" "}
        </Text>

        <Text fontSize="xl" className="text-[#E044C4]">
          Here are some recommendations for you to ✨be better ✨
        </Text>

        <SimpleGrid
          spacing={4}
          my={6}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card>
            <CardHeader>
              <div className=" flex items-center justify-center">
                <h1 className="font-bold text-[#5452C6] text-[32px] leading-[58px] text-left">
                  Get a cashback card{" "}
                </h1>
              </div>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-center">
                <h1 className="font-normal text-[#5452C6] text-lg leading-[22px] text-left">
                  Cash back as you spend? That is free real estate{" "}
                </h1>
              </div>
                <Image src="data:image/jpeg;base64,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" />
            </CardBody>
            <CardFooter>
              <Link href="https://www.rhbgroup.com/shellcard/index.html/">
                <button
                  type="button"
                  class="text-white bg-[#E044C4] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-[20px] text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Learn More
                </button>
              </Link>
            </CardFooter>
          </Card>
        </SimpleGrid>

        <Link href="/report/summarySix">
          <NextButton text="Next" />
        </Link>
      </Box>
    </div>
    //   <Link href="/report/summarySix">
    //   <NextButton text="next" />
    // </Link>
  );
}

export default SummaryFive;
