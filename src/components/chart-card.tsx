import { PolymorphicComponentProps } from "@/lib/types/types";
import { cn } from "@/lib/utils";

type ChartCardProps = unknown;

const ChartCard = <C extends React.ElementType = "div">({
  as,
  children,
  className,
  ...props
}: PolymorphicComponentProps<C, ChartCardProps>) => {
  const Component = as || "div";
  return (
    <Component
      className={cn("w-full rounded-lg md:rounded-xl lg:rounded-2xl bg-white/90 p-4 md:p-4 lg:p-6 shadow-sm flex flex-col gap-4", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

type ChartTitleProps = unknown;

const ChartCardTitle = <C extends React.ElementType = "h2">({
  as,
  children,
  className,
  ...props
}: PolymorphicComponentProps<C, ChartTitleProps>) => {
  const Component = as || "h2";
  return (
    <Component
      className={cn("font-heading text-base md:text-xl lg:text-2xl font-bold text-zinc-700", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

type ChartCardContentProps = unknown;

const ChartCardContent = <C extends React.ElementType = "div">({
  as,
  children,
  className,
  ...props
}: PolymorphicComponentProps<C, ChartCardContentProps>) => {
  const Component = as || "div";
  return (
    <Component className={cn("w-full h-full", className)} {...props}>
      {children}
    </Component>
  );
};

export { ChartCard, ChartCardTitle, ChartCardContent };
