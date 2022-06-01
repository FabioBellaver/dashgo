import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">

            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Fábio Bellaver</Text>
                    <Text color="gray.500" fontSize="small">
                        fabio.bellaver658@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar
                size="md"
                name="Fábio Bellaver"
                src="https://github.com/fabiobellaver.png"
            />
        </Flex>
    )
}