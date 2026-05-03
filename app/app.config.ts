export default defineAppConfig({
  ui: {
    colors: {
      primary: "brand",
      neutral: "slate",
    },
    button: {
      slots: {
        base: "rounded-none transition-all duration-400 cursor-pointer ",
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
          class: "hover:bg-secondary",
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
          class: "border-1",
        },
        {
          color: "primary",
          variant: "outline",
          size: "xl",
          class: "border-1",
        },
      ],
    },
    card: {
      slots: {
        root: "rounded-none",
      },
    },
    badge: {
      slots: {
        base: "rounded-none",
      },
      defaultVariants: {
        variant: "outline",
        color: "neutral",
      },
      compoundVariants: [
        {
          variant: "outline",
          size: "md",
          class: "rounded-none px-4 py-2 dark:text-white",
        },
        {
          variant: "solid",
          size: "md",
          class: "rounded-none px-4 py-2 dark:text-white",
        },
      ],
    },
    input: {
      slots: {
        base: "rounded-none",
      },
      variants: {
        size: {
          lg: {
            base: "p-3.5 text-md font-normal",
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
            root: "rounded-none bg-primary",
            icon: "text-white",
          },
        },
      },
    },
  },
});
