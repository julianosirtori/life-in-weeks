interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label: string;
}

export const Progress = ({ value, label, ...props }: ProgressProps) => {
  return (
    <div {...props}>
      <div className="relative h-3 w-full rounded-full">
        <div className="absolute left-0 top-0 h-3 w-full rounded-full bg-secondary-background" />
        <div
          className={`absolute left-0 top-0  h-3 bg-highlight w-[${value}%] rounded-full`}
        />
      </div>
      <div className="mt-2 flex flex-col items-center justify-center">
        <span className="font-bold text-primary-text">{`${value}%`}</span>
        <span className="text-sm font-medium text-secondary-text">{label}</span>
      </div>
    </div>
  );
};
