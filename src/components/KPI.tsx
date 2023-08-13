type KPIProps = {
  label: string;
  value: number;
};

export const KPI = ({ label, value }: KPIProps) => {
  return (
    <div className="flex w-full  flex-col items-center justify-center  gap-3 rounded-sm bg-secondary-background py-4">
      <span className="text-2xl font-bold text-primary-text">{value}</span>
      <span className="font-medium text-secondary-text">{label}</span>
    </div>
  );
};
