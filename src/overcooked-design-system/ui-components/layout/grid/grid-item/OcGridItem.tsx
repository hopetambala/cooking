import { FC, ReactNode } from "react";

export const OcGridItem: FC<{ children: ReactNode }> = (props) => {
  return <div {...props}>{props.children}</div>;
};
