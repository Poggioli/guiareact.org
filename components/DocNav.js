import React from 'react';
import NextLink from 'next/link';
import { Text, Box } from '@modulz/design-system';

export function NavHeading({ children }) {
    return (
        <Text
            as="h4"
            size="3"
            css={{
                fontWeight: 500,
                px: '$5',
                py: '$2',
            }}
        >
            {children}
        </Text>
    );
}

export function NavSubHeading({ children }) {
    return (
        <Text
            as="h3"
            size="2"
            css={{
                fontWeight: 500,
                px: '$5',
                py: '$2',
            }}
        >
            {children}
        </Text>
    );
}

export function NavItem({ children, active, disabled, href, css, ...props }) {
    const isExternal = href.startsWith('http');

    return (
        <Box
            as={isExternal || disabled ? 'span' : NextLink}
            {...(isExternal || disabled ? {} : { href, passHref: true })}
        >
            <Box
                {...props}
                {...(isExternal ? { href, target: '_blank' } : {})}
                as={disabled ? 'div' : 'a'}
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: disabled ? '$gray10' : '$hiContrast',
                    py: '$2',
                    px: '$5',
                    backgroundColor: active ? '$violet5' : 'transparent',
                    userSelect: 'none',
                    minHeight: '$6',
                    transition: 'background-color 50ms linear',
                    ...(disabled ? { pointerEvents: 'none' } : {}),
                    '&:hover': {
                        backgroundColor: active ? '$violet5' : '$violet4',
                    },
                    '&:focus': {
                        outline: 'none',
                        boxShadow: '0 0 0 1px $colors$violet7',
                    },
                    ...css,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
