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
    <div>
      <Carousel>
        <CarouselContent className="-ml-4">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
            1
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
            2
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
            3
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
