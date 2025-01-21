import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

function HeroVideo() {
  return (
    <div className="relative w-full py-20 lg:py-40 bg-gray-50 dark:bg-gray-900">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.13]"
        style={
          {
            backgroundImage: `
            linear-gradient(90deg, rgb(0 0 0) 1px, transparent 1px),
            linear-gradient(180deg, rgb(0 0 0) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          } as React.CSSProperties
        }
      />

      {/* Dark Mode Grid Overlay */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-[0.13]"
        style={
          {
            backgroundImage: `
            linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px),
            linear-gradient(180deg, rgb(255 255 255) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          } as React.CSSProperties
        }
      />

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-transparent to-blue-300/20" />

      {/* Content */}
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge
                variant="outline"
                className="flex items-center gap-2 bg-white dark:bg-gray-900 w-fit"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                We&apos;re Hiring!
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-bold">
                Innovate with Cutting-Edge Technology!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Embrace the future of business with our solutions. We simplify
                and accelerate SMB trade, making your operations smoother and
                more efficient.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="default">
                Lets talk <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4" variant="ghost">
                Member Login <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square">
            <video
              src="https://videos.pexels.com/video-files/18069235/18069235-uhd_2560_1440_24fps.mp4"
              className="w-full h-full object-cover rounded-md"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroVideo };
