type Props = {
  option: string;
  gap?: string;
  textSize?: "tiny" | "small" | "medium" | "large";
  textWeight?: "normal" | "medium" | "semibold";
  textColor?: string;
};

export const Select = ({
  option,
  gap = "1",
  textSize = "tiny",
  textWeight = "normal",
  textColor = "gray-300",
}: Props) => {
  return (
    <div
      className={`flex items-center gap-${gap} text-${textColor} text-tiny cursor-pointer hover:text-primary transition-colors duration-100`}
    >
      <span className={`text-${textSize}`}>{option}</span>
      <span className={`text-${textSize} font-${textWeight} rotate-90`}>
        &gt;
      </span>
    </div>
  );
};
