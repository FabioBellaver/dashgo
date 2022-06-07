import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import NextLink from "next/link";

import { Header } from "../../components/header";
import { Pagination } from "../../components/pagination";
import { Sidebar } from "../../components/sidebar";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    async function handlePrefetchUser(userId: string) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)
            return response.data
        }, {
            staleTime: 1000 * 60 * 10 // 10m
        })
    }

    const [page, setPage] = useState(1)

    const { data, isLoading, isFetching, error } = useUsers(page)

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={['4', '4', '6']}>
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">

                        <Heading size="lg" fontWeight="normal">
                            Users
                            {!isLoading && isFetching &&
                                <Spinner size="sm" color="gray.500" ml="4" />}
                        </Heading>

                        <NextLink href="/users/create" passHref>
                            <Button
                                cursor="pointer"
                                as="a"
                                colorScheme="pink"
                                size="sm"
                                fontSize="sm"
                                leftIcon={<Icon as={RiAddLine} fontSize={18} />}
                            >
                                Create new user
                            </Button>
                        </NextLink>
                    </Flex>

                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Failed to get data.</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>
                                            User
                                        </Th>

                                        {isWideVersion && <Th>Registration date</Th>}

                                        <Th>
                                        </Th>

                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {data.users.map((user: User) => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                                            <Text fontWeight="bold">{user.name}</Text>
                                                        </Link>
                                                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && <Td color="gray.100">
                                                    {user.createdAt}
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
                                        )
                                    })}

                                </Tbody>
                            </Table>

                            <Pagination
                                totalCountOfRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>
                    )}

                </Box>
            </Flex>
        </Box>
    )
}