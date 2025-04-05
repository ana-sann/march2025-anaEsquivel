import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";

import { title } from "@/components/primitives";
export default function RecipesPage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <div>
        <h2 className="m-6 border-2 border-red-900">ツナマヨおにぎり</h2>
        <p className="m-6 border-2">食材:</p>
        <p className="m-6 border-2 border-green-800">お米,塩,のり,ツナ,マヨ</p>
        <Button className="bg-red-900 justify-center">
          <a href="https://www.youtube.com/watch?v=MtN1YnoL46Q">
            find onigiri recipe here
          </a>
        </Button>
      </div>
      <Image
        alt="Onigiri"
        className="m-9 border-5 border-purple-400"
        height="512"
        src="https://www.okonomikitchen.com/wp-content/uploads/2019/08/vegan-japanese-rice-ball-onigiri-recipe-1-of-6-683x1024.jpg"
        width="341.5"
      />
      <Textarea
        isRequired
        className="max-w-xs"
        label="Thoughts on the recipe?"
        labelPlacement="outside"
        placeholder="Write feedback here"
      />
    </div>
  );
}
