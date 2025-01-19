import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-green-500 text-white shadow-sm hover:bg-green-600",
        warning: "bg-yellow-500 text-black shadow-sm hover:bg-yellow-600",
        info: "bg-blue-500 text-white shadow-sm hover:bg-blue-600",
        subtle: "bg-muted text-muted-foreground hover:bg-muted/80",
        transparent: "bg-transparent text-primary hover:bg-primary/10",
        whiteOutline:
          "bg-transparent border border-white text-white hover:bg-white/10", // New variant
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-lg",
        xs: "h-7 rounded px-2 text-xs",
        icon: "h-9 w-9",
        wide: "h-9 px-6 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
