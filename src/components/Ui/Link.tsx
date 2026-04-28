import React from "react";

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & { className?: string };

export default function Link({ children,className,...restProps }: Props) {
  return (
    <a className={`font-Digibank-Regular text-darkGrey underline decoration-solid	${className}`} {...restProps}>
      {children}
    </a>
  );
}
