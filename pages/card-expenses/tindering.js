import React, { useState } from "react";
import Head from "next/head";
import OtherCategories from "../../components/OtherCategories";
import Card from "../../components/Card";
import EXPENSE from "../../data/expense";
import CARDS from "../../data/cards";
import { AnimatePresence } from "framer-motion";
import TinderCard from "../../components/TinderCard";
import TotalSpend from "../../components/TotalSpend";
// import ModalUsage from "../../components/Modal";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

function CardExpenses() {
  const [expense, setExpense] = useState(EXPENSE);
  const [cards, setCards] = useState(CARDS);
  const [result, setResult] = useState({
    like: 0,
    nope: 0,
    superlike: 0,
  });
  const [history, setHistory] = useState([]);
  // index of last card
  const activeIndex = cards.length - 1;

  const removeCard = (oldCard, swipe) => {
    setHistory((current) => [...current, { ...oldCard, swipe }]);
    setCards((current) =>
      current.filter((card) => {
        return card.id !== oldCard.id;
      })
    );
    setResult((current) => ({ ...current, [swipe]: current[swipe] + 1 }));
  };


  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    
      <Head>
        <title>ZEE BY RHB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-4 flex items-center justify-center">
        <TotalSpend />
      </div>

      <div className="my-4 flex items-center justify-center">
        <h1 className="font-bold text-[32px] leading-9 text-center">
          RM 120.50
        </h1>
      </div>

      <div className="relative flex flex-col justify-center items-center w-full h-[130vw] gradient">
        <AnimatePresence>
          {cards.map((card, index) => (
            <TinderCard
              key={card.name}
              active={index === activeIndex}
              removeCard={removeCard}
              card={card}
            />
          ))}
        </AnimatePresence>
      </div>

      {cards.length === 0 ? (
        <div className="my-4 flex items-center justify-center">
          <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="my-4 flex items-center justify-center">
                  <h1 className="font-bold text-[#5452C6] text-5xl leading-[58px] text-center">
                    Nice laa
                  </h1>
                </div>

                <div className="my-4 flex items-center justify-center">
                  <span className="text-8xl">🎇</span>
                </div>

                <div className="my-4 flex items-center justify-center">
                  <h1 className="font-normal text-[#5452C6] text-lg leading-[22px] text-center">
                    You finished categorizing your expenses. Let’s see how you
                    did{" "}
                  </h1>
                </div>
              </ModalBody>

              <ModalFooter>
                {/* <Button variant="ghost">I’m afraid but sure</Button> */}
                <button
                  type="button"
                  class="text-white bg-[#6001FF] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-[20px] text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Link href="/report/summaryOne">I’m afraid but sure</Link>
                </button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      ) : null}

      <div className="grid grid-cols-3 gap-4 p-2">
        {expense.map((i, index) => (
          <Card key={i.name} card={i} />
        ))}
      </div>

      <div className="my-4 flex items-center justify-center">
        <OtherCategories />
      </div>
    </>
  );
}

export default CardExpenses;
