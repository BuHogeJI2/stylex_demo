import * as stylex from "@stylexjs/stylex";
import {colors} from "theme/vars.stylex";

export const sectionStyles = stylex.create({
  section: {
    backgroundColor: `rgba(0, 0, 0, 0.1)`,
    color: colors.primary,
    padding: `20px`,
    border: '1px solid',
    borderColor: 'black'
  },
});
