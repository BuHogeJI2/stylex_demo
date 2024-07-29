import {ReactElement} from "react";
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  red: {
    color: 'red',
    fontSize: 60,
  },
});

export default function HomePage(): ReactElement {
  return <div {...stylex.props(styles.red)}>{`Hello World`}</div>;
}

export const getServerSideProps = async ctx => {
  return {
    props: {}
  }
}