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
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <img
            src="https://www.journeysinternational.com/wp-content/uploads/2019/05/bhaktapur-nepal.jpg"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://image.tourismnpl.com/Landmark/Kathmandu_Durbar_Square_968.jpeg"
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
