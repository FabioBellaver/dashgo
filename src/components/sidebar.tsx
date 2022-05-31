import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.600" fontSize="small">GENERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" py="1">
                            <Icon as={RiDashboardLine} fontSize="20"/>
                            <Text ml="4" fontWeight="normal">Dashboard</Text>
                        </Link>
                        <Link display="flex" py="1">
                            <Icon as={RiContactsLine} fontSize="20"/>
                            <Text ml="4" fontWeight="normal">Users</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.600" fontSize="small">AUTOMATION</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" py="1">
                            <Icon as={RiInputMethodLine} fontSize="20"/>
                            <Text ml="4" fontWeight="normal">Forms</Text>
                        </Link>
                        <Link display="flex" py="1">
                            <Icon as={RiGitMergeLine} fontSize="20"/>
                            <Text ml="4" fontWeight="normal">Automation</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>

        </Box>
    )
}