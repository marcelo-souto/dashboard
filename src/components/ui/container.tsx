import { PolymorphicComponentProps } from "@/lib/types/types";
import { cn } from "@/lib/utils";

type ContainerProps = unknown;

const Container = <C extends React.ElementType = "div">({
  as,
  children,
  className,
  ...props
}: PolymorphicComponentProps<C, ContainerProps>) => {
  const Component = as || "div";
  return (
    <Component className={cn("container mx-auto p-6 md:p-8 lg:p-10", className)} {...props}>
      {children}
    </Component>
  );
};

export { Container };
