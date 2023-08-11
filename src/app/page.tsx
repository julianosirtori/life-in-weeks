import { KPI } from "@/components/KPI";
import { Progress } from "@/components/Progress";
import { Year } from "@/components/Year";
import { ArrowDownIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <section className="mt-4 flex flex-col gap-8 px-2">
        <p className="text-white  ">
          Cada ponto representa uma semana, passe o mouse sobre os pontos
          coloridos, para ver algum acontecimento especial, para mudar a
          categoria dos pontos, mude no select abaixo.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-3">
            <KPI label="Weekends left" value={3068} />
            <KPI label="Weekends left" value={3068} />
            <KPI label="Years left" value={59} />
          </div>
          <Progress label="Life progress" value={75} />
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
          <div className="flex flex-col gap-4 p-4">
            {Array.from({ length: 25 }).map((_, index) => (
              <Year fillWeeks={52} key={index} />
            ))}
            <Year fillWeeks={30} />
            {Array.from({ length: 25 }).map((_, index) => (
              <Year fillWeeks={0} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
