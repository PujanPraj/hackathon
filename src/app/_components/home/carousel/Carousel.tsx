import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MyCarousel = () => {
  return (
    <Carousel className="h-[60%]">
      <CarouselContent>
        <CarouselItem>
          <img
            src="/assets/carousel/caro1.png"
            className="w-full h-[60%] bg-contain"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/assets/carousel/caro2.png"
            className="w-full h-[60%] bg-contain"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MyCarousel;
