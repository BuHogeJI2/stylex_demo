import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  bg: {
    backgroundColor: "red",
  },
});

const RootPage = () => {
  return (
    <main>
      <div {...stylex.props(styles.bg)}>{`HOME PAGE`}</div>
    </main>
  );
};

export default RootPage;
