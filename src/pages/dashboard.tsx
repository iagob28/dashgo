import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type ChartOptions = {
  grid: ApexGrid;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
};

const options: ChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-20T02:00:00.000z",
      "2022-03-21T02:00:00.000z",
      "2022-03-22T02:00:00.000z",
      "2022-03-23T02:00:00.000z",
      "2022-03-24T02:00:00.000z",
      "2022-03-25T02:00:00.000z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
  stroke: {
    show: false,
    curve: "smooth",
    lineCap: "butt",
    colors: [],
    width: 0,
    dashArray: 0,
  },
};
const series = [{ name: "series1", data: [31, 120, 32, 564, 51, 213] }];

export default function Dashboard() {
  return (
    <>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />
          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            alignContent="flex-start"
          >
            <Box p="8" bg="gray.800" borderRadius={8} pb="4">
              <Text>Inscritos da semana</Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
            <Box p="8" bg="gray.800" borderRadius={8} pb="4">
              <Text>Taxa de Abertura</Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
