import React from "react";
import Head from "next/head";
import CardExpensePage from "../../public/cardexpense.svg";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

function CardExpense() {
  return (
    <div>
      <Head>
        <title>ZEE BY RHB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box align-items="center" className="bg-[#6BCDE7] m-0 p-0 h-screen">
        <Link href="/card-expenses/main">
          <CardExpensePage />
        </Link>
      </Box>
    </div>
  );
}

export default CardExpense;
