export default defineAppConfig({
  ui: {
    colors: {
      primary: "brand",
      secondary: "sec",
      neutral: "slate",
    },
    button: {
      slots: {
        base: "transition-all sm:duration-400 cursor-pointer",
      },
      variants: {
        size: {
          md: {
            base: "px-5 py-2.5 text-md font-normal dark:text-white",
          },
          xl: {
            base: "px-6 py-4 text-md font-normal dark:text-white",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class: "border-1 border-primary dark:border-white hover:bg-black hover:border-black",
        },
        {
          color: "secondary",
          variant: "outline",
          class: "hover:bg-secondary hover:text-white",
        },
        {
          color: "secondary",
          variant: "outline",
          size: "xl",
          class: "sm:border-1",
        },
        {
          color: "primary",
          variant: "outline",
          size: "xl",
          class: "sm:border-1",
        },
      ],
    },
    badge: {
      defaultVariants: {
        variant: "outline",
        color: "neutral",
      },
      compoundVariants: [
        {
          variant: "outline",
          size: "md",
          class: "px-4 py-2 dark:text-white",
        },
        {
          variant: "solid",
          size: "md",
          class: "px-4 py-2 dark:text-white",
        },
      ],
    },
    card: {
      slots: {
        root: "rounded-2xl",
      },
    },
    input: {
      slots: {
        root: "w-full",
      },
      variants: {
        size: {
          lg: {
            base: "p-3.5 text-md font-normal mt-2",
          },
        },
      },
      defaultVariants: {
        size: "lg",
      },
    },
    textarea: {
      slots: {
        root: "w-full",
      },
      variants: {
        size: {
          lg: {
            base: "p-3.5 text-md font-normal mt-2",
          },
        },
      },
      defaultVariants: {
        size: "lg",
      },
    },
    select: {
      slots: {
        base: "w-full",
      },
      variants: {
        size: {
          lg: {
            base: "p-3.5 text-md font-normal mt-2",
          },
        },
      },
      defaultVariants: {
        size: "lg",
      },
    },
    avatar: {
      variants: {
        size: {
          "3xl": {
            root: "bg-primary",
            icon: "text-white",
          },
        },
      },
    },
    pageSection: {
      slots: {
        headline:
          "bg-primary px-4 py-1 w-max md:mx-auto uppercase font-normal! text-white! text-sm tracking-wider rounded-full",
        title: "md:text-center! text-left! font-semibold",
        description: "md:text-center! text-left!",
      },
    },
  },
});
