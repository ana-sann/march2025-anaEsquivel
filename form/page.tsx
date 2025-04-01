"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function FormPage() {
  let facts: string[] = [
    "Social isolation correlates with an increase of heart failure and disease.",
    "The more processed a food is, the more likely it is to contain carcinogens.",
    "The earliest written records of TB disease were in India (3,300 years ago) and China (2,300 years ago).",
    "Despite inflation, the USA hasn't changed the minimum wage since 2009, the minimum being 7.25 an hour.",
    "An average cloud weighs around a million tons.",
    "Your brain is constantly eating itself.",
    "The deepest place on Earth is the Mariana Trench in the Pacific Ocean.",
    "Trees can communicate with each other.",
    "Nintendo is 135 years old.",
    "Unlike humans, spiders have clear blood instead of red blood, and their blood is actually a type of lymph.",
    "The longest a chicken lived without a head was 18 months.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>Fun Fact Generator</h1> <br />
      <Button
        className="bg-gradient-to-tr from-yellow-500 to-red-500 text-white shadow-lg"
        radius="full"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * 10)]);
        }}
      >
        Click 4 Fact
      </Button>
      <p>{fact}</p>
      {/* <Textarea isReadOnly className="max-w-xs m-8" label="Description" placeholder="Enter your description"></Textarea>
      <p className= "inline-flex md:ml-1 animate-text-gradient font-medium bg-clip-text text-transparent bg-[linear-gradient(90deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]"></p> */}
    </div>
  );
}
