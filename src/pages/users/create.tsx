import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Link from "next/link";

import { Input } from "../../components/form/input";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

interface CreateUserFormData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    password_confirmation: yup.string().oneOf([null, yup.ref("password")], "password confirmation must be the same as password field")
})

export default function CreateUser() {

    const router = useRouter()

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
                created_at: new Date()
            }
        })
        return response.data.user
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        }
    })

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const { errors } = formState

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
        await createUser.mutateAsync(data)
        router.push('/users')
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["6", "8"]}>
                <Sidebar />

                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">
                        Create user
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="name"
                                label="Full Name"
                                error={errors.name}
                                {...register('name')}
                            />
                            <Input
                                name="email"
                                label="E-mail"
                                error={errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                error={errors.password}
                                {...register('password')}
                            />
                            <Input
                                type="password"
                                name="password_confirmation"
                                label="Password Confirmation"
                                error={errors.password_confirmation}
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha" size="sm">Cancel</Button>
                            </Link>
                            <Button
                                type="submit"
                                colorScheme="pink"
                                size="sm"
                                isLoading={formState.isSubmitting}
                            >
                                Save
                            </Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}