import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/sidebarDrawerContext";
import { SidebarNav } from "./sidebarNav";

export function Sidebar() {

    const { isOpen, onClose } = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSidebar) {
        return (
            <Drawer size="full" isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay>
                    <DrawerContent bg="gray.800">
                        <DrawerCloseButton mt="6" py="4"/>
                        <DrawerHeader>Navigation</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SidebarNav />
        </Box>
    )
}