import Image from "next/image";
import { cardsDataProps } from "utils/types";

export function MediumCard(props: cardsDataProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={props.img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{props.title}</h3>
    </div>
  );
}
