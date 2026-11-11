export default defineAppConfig({
  ui: {
    colors: {
      primary: "brand",
      secondary: "sec",
      neutral: "neutral",
    },
    button: {
      slots: {
        base: "group rounded-sm transition-colors duration-300 ease-out cursor-pointer",
        trailingIcon:
          "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1",
      },
      variants: {
        size: {
          md: {
            base: "px-3.5 py-2 text-sm font-normal",
          },
          lg: {
            base: "px-4 py-2 text-sm font-semibold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)]",
          },
          xl: {
            base: "px-5 py-3 text-base font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)]",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class:
            "text-white dark:text-white border border-primary dark:border-white/15 hover:bg-neutral-900 hover:border-neutral-900 dark:hover:bg-brand-600 dark:hover:border-white/25",
        },
        {
          color: "secondary",
          variant: "outline",
          class: "hover:bg-secondary hover:text-white",
        },
        {
          color: "primary",
          variant: "outline",
          class:
            "hover:bg-primary hover:text-white dark:bg-primary/10 dark:text-white dark:ring-primary/50 dark:hover:bg-primary dark:hover:ring-primary",
        },

        {
          color: "primary",
          variant: "outline",
          class: "hover:bg-primary hover:text-white",
        },
        {
          color: "secondary",
          variant: "outline",
          size: "xl",
          class: "sm:border",
        },
        {
          color: "primary",
          variant: "outline",
          size: "xl",
          class: "sm:border",
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
          class: "px-4 py-2 text-white dark:text-white",
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
            base: "rounded-sm p-3.5 text-md font-normal mt-2",
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
            base: "rounded-sm p-3.5 text-md font-normal mt-2",
          },
        },
      },
      defaultVariants: {
        size: "lg",
      },
    },
    select: {
      slots: {
        base: "w-full rounded-sm",
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
