import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text,
    useBreakpointValue
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/header";
import { Pagination } from "../../components/pagination";
import { Sidebar } from "../../components/sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    }) 

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={['4', '4', '6']}>
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">

                        <Heading size="lg" fontWeight="normal">Users</Heading>

                        <Button
                            as="a"
                            colorScheme="pink"
                            size="sm"
                            fontSize="sm"
                            leftIcon={<Icon as={RiAddLine} fontSize={18} />}
                        >
                            Create new user
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    User
                                </Th>

                                {isWideVersion && <Th>Data de Cadastro</Th>}

                                <Th>
                                </Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box >
                                        <Text fontWeight="bold">Fábio Bellaver</Text>
                                        <Text fontSize="sm" color="gray.300">fabio.bellaver658@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td color="gray.100">
                                    02 de Abril, 2022
                                </Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        {isWideVersion && 'Edit'}
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Fábio Bellaver</Text>
                                        <Text fontSize="sm" color="gray.300">fabio.bellaver658@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td color="gray.100">
                                    02 de Abril, 2022
                                </Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        {isWideVersion && 'Edit'}
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Fábio Bellaver</Text>
                                        <Text fontSize="sm" color="gray.300">fabio.bellaver658@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td color="gray.100">
                                    02 de Abril, 2022
                                </Td>}
                                <Td>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                >
                                    {isWideVersion && 'Edit'}
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}