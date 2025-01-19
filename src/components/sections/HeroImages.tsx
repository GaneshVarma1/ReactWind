import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";

function HeroImages() {
  return (
    <div className="relative w-full py-20 lg:py-40">
      {/* Content */}
      <div className="relative container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-7xl  max-w-lg tracking-tighter text-left">
              Start your celebration with us!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Running a chocolate business is a labor of love. Skip the hassle
              of traditional wholesale methods and focus on what matters -
              creating delicious confections. We make it easier for artisan
              chocolatiers to connect, sell, and grow their sweet business.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-4" variant="link">
                Call to order <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1549007994-cb92caebd54b"
                alt="Dark chocolate pieces"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-muted rounded-md row-span-2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52"
                alt="Chocolate making process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-muted rounded-md aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511381939415-e44015466834"
                alt="Chocolate truffles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroImages };
