import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../activeLink";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" py="1" {...rest} >
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="normal">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}