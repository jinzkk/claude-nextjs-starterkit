import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-btn-primary text-white hover:bg-btn-primary-hover active:bg-btn-primary-active disabled:bg-btn-disabled-bg disabled:text-btn-disabled-text",
        outline:
          "border border-btn-primary bg-btn-secondary-bg text-btn-primary hover:bg-btn-secondary-hover active:bg-btn-secondary-active disabled:border-btn-disabled-bg disabled:bg-white disabled:text-btn-disabled-text",
        secondary:
          "border border-btn-tertiary-border bg-btn-tertiary-bg text-text-subtle hover:bg-btn-tertiary-hover active:bg-btn-tertiary-active disabled:border-btn-disabled-bg disabled:text-btn-disabled-text",
        dark:
          "bg-btn-function text-white hover:bg-btn-function-hover active:bg-btn-function-active disabled:bg-btn-disabled-bg disabled:text-btn-disabled-text",
        ghost:
          "text-text-subtle hover:bg-btn-tertiary-hover active:bg-btn-tertiary-active disabled:text-btn-disabled-text",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 disabled:bg-btn-disabled-bg disabled:text-btn-disabled-text",
        link: "text-btn-primary underline-offset-4 hover:underline disabled:text-btn-disabled-text",
      },
      size: {
        xl: "h-16 rounded-[12px] px-8 text-[19px]",
        lg: "h-14 rounded-[12px] px-6 text-[17px]",
        default: "h-12 rounded-[8px] px-5 text-[15px]",
        sm: "h-10 rounded-[8px] px-4 text-[15px]",
        xs: "h-8 rounded-[6px] px-3 text-[15px]",
        icon: "size-12",
        "icon-xs": "size-8 rounded-[4px] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
