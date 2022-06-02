import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react"
import dynamic from 'next/dynamic'
import { Header } from "../components/header"
import { Sidebar } from "../components/sidebar"
import { ApexOptions } from "apexcharts"
import { useEffect, useState } from "react"

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options: ApexOptions = {
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
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2022-05-30T00:00:00.000Z',
            '2022-05-25T00:00:00.000Z',
            '2022-05-20T00:00:00.000Z',
            '2022-05-15T00:00:00.000Z',
            '2022-05-10T00:00:00.000Z',
            '2022-05-05T00:00:00.000Z',
            '2022-04-29T00:00:00.000Z',

        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}

const series = [
    {
        name: 'series1', data: [20, 7, 13, 15, 4, 6, 1] // 
    }
]



export default function Dashboard() {

    const [assembleGraphics, setAssembleGraphics] = useState(false)

    useEffect(() => {
        setAssembleGraphics(true)
    }, [])

    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                {assembleGraphics && (
                    <SimpleGrid flex="1" gap="4" minChildWidth="320px">
                        <Box
                            p={["4", "6"]}
                            bg="gray.800"
                            borderRadius={8}
                            pb="4"
                        >
                            <Text fontSize="lg" mb="4">Subscribers of the week</Text>
                            <Chart options={options} series={series} type="area" height={160} />
                        </Box>
                        <Box
                            p={["4", "6"]}
                            bg="gray.800"
                            borderRadius={8}
                            pb="4"
                        >
                            <Text fontSize="lg" mb="4">Registration fee</Text>
                            <Chart options={options} series={series} type="area" height={160} />
                        </Box>
                    </SimpleGrid>
                )}

            </Flex>

        </Flex>
    )
}