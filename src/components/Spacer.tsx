interface SpacerProps {
  size: number;
  axis: "vertical" | "horizontal";
  style?: object;
}

const Spacer = ({ size, axis, style = {} }: SpacerProps) => {
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
    />
  );
};
export default Spacer;
