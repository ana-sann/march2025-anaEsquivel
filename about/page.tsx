import Image from "next/image";
//this is for <a></a>
import { Button } from "@heroui/button";
//grocery store trip
import link from "next/link";
//this is buttons
import { Switch } from "@heroui/switch";
import { Textarea } from "@heroui/input";

import { title } from "@/components/primitives";
export default function AboutPage() {
  return (
    <div className="inline-flex md:ml-1 animate-text-gradient font-medium bg-clip-text text-transparent bg-[linear-gradient(90deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]">
      <h1 className={title()}>About</h1>
      <div className="flex flex-wrap text 2xl border-blue-950 justify center">
        <p>
          <Image
            alt="Photo of me in Nintendo Shop"
            className="flex m-8 flex-wrap border-white"
            height={300}
            src="/me1.jpg"
            width={300}
          />
          This is me in Nintendo World, trying out the hats in the shop.
          <Image
            alt="Cello"
            className="flex m-8 flex-wrap border-white"
            height={300}
            src="/cello.jpg"
            width={300}
          />
          Some of my hobbies are playing instruments, including the cello. I am
          currently in the Skyline Chamber Orchestra.
        </p>
        <p>
          <Image
            alt="Photography of sheet music I think is cool"
            className="flex m-8 flex-wrap border-white"
            height={300}
            src="/sheetmusic.jpg"
            width={300}
          />{" "}
          I personally thought this photography was cool, it has nice contrast
          and it represents my interests.
          <Image
            alt="Performing with my ensemble"
            className="flex m-8 flex-wrap border-white"
            height={400}
            src="/performance.jpg"
            width={300}
          />
          This is me performing with my ensemble in Mt. Si High School.
          Currently the ensemble is being judged by adjuticators during our
          hextet in C minor.
        </p>
        <Button
          as={link}
          className="flex m-8 bg-blue-400"
          href="https://github.com/ana-sann"
          target="_blank"
        >
          Link to my GitHub
        </Button>
        <p className="flex m-8 flex-wrap">
          Another passion I have is the Japanese culture and language. These are
          helpful links to learn Japanese:
        </p>
        <Button
          as={link}
          className="bg-blue-400 m-3"
          href="https://jisho.org/"
          target="_blank"
        >
          Jisho: Best Japanese Dictionary
        </Button>
        <Button
          as={link}
          className="bg-blue-400 m-3"
          href="https://www.mykikitori.com/"
          target="_blank"
        >
          MyKikitori: Listening Exercises
        </Button>
        <Button
          as={link}
          className="bg-blue-400 m-3"
          href="https://busuu.com/"
          target="_blank"
        >
          Busuu: Language learning platform
        </Button>
        <Button
          as={link}
          className="bg-blue-400 m-3"
          href="https://tadoku.org/japanese/en/free-books-en/"
          target="_blank"
        >
          Tadoku: Reading in Japanese
        </Button>
        {/*this button should take us to the link provided after we gove ot a <href> */}
        {/* <Button> className ="bg-success-600" as={link} href="https://www.mykikitori.com/" */}
        <Switch />
        <Textarea
          isRequired
          className="max-w-xs"
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
        />
      </div>
    </div>
  );
}
