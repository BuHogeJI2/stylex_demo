import {ReactElement} from "react";
import * as stylex from "@stylexjs/stylex";
import {sectionStyles} from "./section.styles";

export function Section(): ReactElement {
  return <div {...stylex.props(sectionStyles.section)}>{`Section content`}</div>
}