import { AppSidebar } from "@/components/app-sidebar";
import {
  ChartCard,
  ChartCardContent,
  ChartCardTitle,
} from "@/components/chart-card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Container } from "@/components/ui/container";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { month: "Janeiro", computador: 186, celular: 80 },
  { month: "Fevereiro", computador: 305, celular: 200 },
  { month: "Março", computador: 237, celular: 120 },
  { month: "Abril", computador: 73, celular: 190 },
  { month: "Maio", computador: 209, celular: 130 },
  { month: "Junho", computador: 214, celular: 140 },
];

const chartConfig = {
  computador: {
    label: "Computador",
    color: "#d7f23a",
  },
  celular: {
    label: "Celular",
    color: "#a5bb2b",
  },
} satisfies ChartConfig;

const Dashboard = () => {
  const pieChartData = chartData.reduce(
    (prevValue: { [key: string]: number | string }[], currValue) => {
      if (!prevValue.length) {
        return Object.keys(currValue)
          .filter((key) => key !== "month")
          .map((key) => ({
            dispositivo: key,
            quantidade: 0,
            fill: `var(--color-${key as keyof typeof currValue})`,
          }));
      }

      prevValue.forEach((item) => {
        (item.quantidade as number) += Number(
          currValue[item.dispositivo as keyof typeof currValue],
        );
      });

      return prevValue;
    },
    [],
  );

  console.log(pieChartData);

  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      <Container className="flex max-w-5xl flex-col gap-10">
        <div>
          <h1 className="font-heading text-3xl font-bold text-zinc-950">
            Olá, Marcelo
          </h1>
          <p className="font-heading font-semibold text-zinc-700">
            Seja bem-vindo ao seu painel de controle.
          </p>
        </div>
        <section className="flex flex-wrap gap-6">
          <div className="h-24 w-full rounded-2xl bg-[#e5fe57] md:flex-1"></div>
          <div className="h-24 w-full rounded-2xl bg-[#e5fe57] md:flex-1"></div>
          <div className="h-24 w-full rounded-2xl bg-[#e5fe57] md:flex-1"></div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <ChartCard className="lg:col-start-1 lg:col-end-3">
            <ChartCardTitle>1º Trimestre</ChartCardTitle>
            <ChartCardContent>
              <ChartContainer
                config={chartConfig}
                className="max-h-[340px] w-full"
              >
                <LineChart
                  data={chartData}
                  margin={{
                    bottom: 0,
                    left: -18,
                    right: 6,
                    top: 0,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    className="font-heading font-medium text-zinc-500"
                  />
                  <YAxis
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    className="font-heading font-medium text-zinc-500"
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line
                    type="monotone"
                    dataKey="computador"
                    stroke="#d7f23a"
                    strokeWidth={4}
                  />
                  <Line
                    type="monotone"
                    dataKey="celular"
                    stroke="#a5bb2b"
                    strokeWidth={4}
                  />
                </LineChart>
              </ChartContainer>
            </ChartCardContent>
          </ChartCard>
          <ChartCard>
            <ChartCardTitle>Resultados</ChartCardTitle>
            <ChartCardContent>
              <ChartContainer
                config={chartConfig}
                className="max-h-[360px] w-full"
              >
                <BarChart data={chartData}>
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    className="font-heading font-medium text-zinc-500"
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar
                    dataKey="computador"
                    fill="var(--color-computador)"
                    radius={[6, 6, 0, 0]}
                  />
                  <Bar
                    dataKey="celular"
                    fill="var(--color-celular)"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </ChartCardContent>
          </ChartCard>
          <ChartCard>
            <ChartCardTitle>PieChart</ChartCardTitle>
            <ChartCardContent>
              <ChartContainer
                config={{
                  celular: {
                    label: "Celular",
                    color: "#a5bb2b",
                  },
                  computador: {
                    label: "Computador",
                    color: "#d7f23a",
                  },
                }}
                className="max-h-[360px] w-full"
              >
                <PieChart margin={{ top: -16, right: 0, bottom: 0, left: 0 }}>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Pie
                    data={pieChartData}
                    dataKey="quantidade"
                    nameKey="dispositivo"
                    innerRadius={48}
                    strokeWidth={10}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {pieChartData.reduce(
                                  (prev, curr) =>
                                    prev + Number(curr.quantidade),
                                  0,
                                )}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Visitantes
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </ChartCardContent>
          </ChartCard>
        </section>
      </Container>
    </SidebarProvider>
  );
};

export { Dashboard };
