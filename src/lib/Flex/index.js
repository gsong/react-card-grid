//@flow strict
import React from "react";

import { defaults as d } from "../defaults.js";
import { flexCompensate } from "../utils.js";

import type { Gaps, Props } from "../types.js";

const Container = React.forwardRef<Props, ?HTMLElement>(
  ({ columnGap = d.columnGap, rowGap = d.rowGap, children, ...props }, ref) => {
    const style = flexCompensate.container({ columnGap, rowGap });

    return (
      <div {...props}>
        <ul data-react-listitem-flex-container style={style} ref={ref}>
          {children}
        </ul>
      </div>
    );
  },
);

type ItemProps = { ...Gaps, itemWidth: number, ... };

const Item = ({
  columnGap = d.columnGap,
  itemWidth,
  rowGap = d.rowGap,
  ...props
}: ItemProps) => {
  const style = {
    width: itemWidth,
    ...flexCompensate.item({ columnGap, rowGap }),
  };

  return <li data-react-listitem-flex-item style={style} {...(props: any)} />;
};

export default { Container, Item };
