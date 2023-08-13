type TYearProps = {
  fillWeeks: number;
  year: number;
};

export const Year = ({ fillWeeks, year }: TYearProps) => {
  const shouldShowYear = year % 5 === 0;

  return (
    <div className="flex flex-row items-center gap-4" id={`year-${year}`}>
      <span className="block h-4 w-9 font-medium text-secondary-text">
        {shouldShowYear && year}
      </span>
      <div className="flex flex-row flex-wrap gap-1">
        {Array.from({ length: fillWeeks }).map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full bg-highlight lg:h-3 lg:w-3"
          />
        ))}
        {Array.from({ length: 52 - fillWeeks }).map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full border border-gray-600 bg-secondary-background lg:h-3 lg:w-3"
          />
        ))}
      </div>
    </div>
  );
};
