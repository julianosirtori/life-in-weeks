type TYearProps = {
  fillWeeks: number;
};

export const Year = ({ fillWeeks }: TYearProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-1">
      {Array.from({ length: fillWeeks }).map((_, index) => (
        <div key={index} className="h-2 w-2 rounded-full bg-highlight" />
      ))}
      {Array.from({ length: 52 - fillWeeks }).map((_, index) => (
        <div
          key={index}
          className="h-2 w-2 rounded-full border border-gray-600 bg-secondary-background"
        />
      ))}
    </div>
  );
};
