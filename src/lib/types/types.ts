import React from "react";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = object
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type { PolymorphicComponentProps };
