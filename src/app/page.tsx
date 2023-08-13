import { KPI } from "@/components/KPI";
import { Progress } from "@/components/Progress";
import { Year } from "@/components/Year";
import { getNumberOfWeeks } from "@/lib/dayjs";
import { ArrowDownIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useMemo } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  const data = useMemo(() => {
    const livedWeeks = getNumberOfWeeks(process.env.BIRTHDAY as string);
    const livedYears = Math.floor(livedWeeks / 52);
    const livedWeeksRest = livedWeeks % 52;
    const maxYears = 100;
    const yearsLeft = maxYears - livedYears;

    // percentage of weeks lived
    const percentageLive = Math.floor((livedWeeks / (100 * 52)) * 100);

    return {
      livedWeeks,
      maxYears,
      livedYears,
      yearsLeft,
      livedWeeksRest,
      percentageLive,
    };
  }, []);

  return (
    <main className="m-auto max-w-screen-lg">
      <Link
        href={`/#year-${data.livedYears}`}
        className="fixed bottom-6 right-6 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white"
      >
        <ChevronDownIcon />
      </Link>

      <section className="mt-4 flex flex-col gap-8 px-2 lg:flex-row lg:justify-between">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-row justify-between gap-3">
            <KPI label="Days left" value={100 * 52 * 7 - data.livedWeeks * 7} />
            <KPI label="Weekends left" value={100 * 52 - data.livedWeeks} />
            <KPI label="Years left" value={data.maxYears - data.livedYears} />
          </div>
          <Progress label="Life progress" value={data.percentageLive} />
        </div>
      </section>
      <section>
        <div className="ml-16 flex flex-row items-center gap-2 px-2 py-4">
          <ArrowRightIcon className="h-5 w-5 text-secondary-text" />
          <span className="text-sm text-secondary-text">Week of the year</span>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row items-start gap-2 px-2 py-4">
            <ArrowDownIcon className="h-5 w-5 text-secondary-text" />
            <span className="text-sm text-secondary-text">Age</span>
          </div>
          <div className="flex flex-col gap-4 p-4 lg:gap-1">
            {Array.from({ length: data.livedYears }).map((_, index) => (
              <Year year={index + 1} fillWeeks={52} key={index} />
            ))}
            {data.livedWeeksRest > 0 && (
              <Year
                year={data.livedYears + 1}
                fillWeeks={data.livedWeeksRest}
              />
            )}
            {Array.from({ length: data.yearsLeft }).map((_, index) => (
              <Year
                year={index + 1 + (data.livedYears - 1)}
                fillWeeks={0}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
