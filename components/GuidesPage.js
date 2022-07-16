import { Badge, Box, Button, Container, Flex, Link, Text } from '@modulz/design-system';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { allReactGuideRoutes, reactGuideRoutes } from '../lib/documentation-routes';
import { NavHeading, NavItem, NavSubHeading } from './DocNav';
import ScrollArea from './ScrollArea';

const GuidesPage = ({ children }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false);
    let currentPageSlug = undefined;
    const routerSlug = router.query.slug;

    const GITHUB_URL = 'https://github.com';
    const REPO_NAME = 'rubenmarcus/guiareact.org';
    let editUrl = '';

    // if (typeof routerSlug === 'string') {
    //     currentPageSlug = router.pathname.substr(1).replace('[slug]', routerSlug);
    //     editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/main/data/${currentPageSlug}.mdx`;
    // } else {
    //     currentPageSlug = router.pathname.substr(1).replace('[...slug]', routerSlug[0]);
    //     editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/main/data/${currentPageSlug}/${routerSlug[1]}.mdx`;
    // }
    editUrl = editUrl.replace('/docs', '');

    const currentPageIndex = allReactGuideRoutes.findIndex((page) => page.slug === currentPageSlug);
    const previous = allReactGuideRoutes[currentPageIndex - 1];
    const next = allReactGuideRoutes[currentPageIndex + 1];

    React.useEffect(() => {
        const handleRouteChange = () => setIsOpen(false);
        router.events.on('routeChangeStart', handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => router.events.off('routeChangeStart', handleRouteChange);
    }, []);

    console.log(children.type.name)


    return (
        <Flex
            css={{
                flexDirection: 'column',
                '@bp2': { flexDirection: 'row' },
            }}
        >
            <Box
                css={{
                    width: '100%',
                    maxHeight: 'auto',
                    borderBottom: '1px solid',
                    borderColor: '$slate6',
                    WebkitOverflowScrolling: 'touch',
                    overflowX: 'hidden',

                    '@bp2': {
                        position: 'fixed',
                        top: '$sizes$8',
                        left: 0,
                        bottom: 0,
                        width: '250px',
                        borderRight: '1px solid',
                        borderBottom: '0',
                        borderColor: '$slate6',
                    },
                }}
            >
                <ScrollArea>
                    <Flex css={{ alignItems: 'center', p: '$4', '@bp2': { display: 'none' } }}>
                        <Box css={{ ml: '-$1' }}>
                            <Button
                                ghost
                                onClick={() => setIsOpen(!isOpen)}
                                state={isOpen ? 'active' : undefined}
                            >
                                <HamburgerMenuIcon />
                                <Box css={{ ml: '$2' }}>Menu</Box>
                            </Button>
                        </Box>
                    </Flex>

                    <Box
                        css={{
                            display: isOpen ? 'block' : 'none',
                            '@bp2': { display: 'block', mt: '$4' },
                        }}
                    >
                        {reactGuideRoutes.map((section) => (
                            <Box key={section.label} css={{ mb: '$4' }}>
                                <NavHeading>{section.label}</NavHeading>
                                {section.pages.map((page) => {
                                    const isDraft = page.draft;

                                    return page.isRoute ? (
                                        <NavItem
                                            key={page.slug}
                                            href={`/${page.slug}`}
                                            disabled={isDraft}
                                            active={currentPageSlug === page.slug}
                                        >
                                            <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                                                {page.title}
                                            </Text>
                                            {isDraft && <Badge css={{ ml: '$2' }}>Em breve</Badge>}
                                        </NavItem>
                                    ) : (
                                        <>
                                            <NavSubHeading>{page.title}</NavSubHeading>
                                            {page.pages.map((subSections) => (
                                                <NavItem
                                                    key={subSections.slug}
                                                    href={`/${subSections.slug}`}
                                                    disabled={subSections.draft}
                                                    active={currentPageSlug === subSections.slug}
                                                    css={{ paddingLeft: '$7' }}
                                                >
                                                    <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                                                        {subSections.title}
                                                    </Text>
                                                    {subSections.draft && <Badge css={{ ml: '$2' }}>Em breve</Badge>}
                                                </NavItem>
                                            ))}
                                        </>
                                    );
                                })}
                            </Box>
                        ))}
                        <Box css={{ height: '$5', '@bp2': { height: '$8' } }} />
                    </Box>
                </ScrollArea>
            </Box>

            <Box
                css={{
                    maxWidth: '100%',
                    flex: 1,
                    py: '$5',

                    '@bp2': { pt: '$8', pb: '$9', pl: '250px' },
                    '@media (min-width: 1440px)': { pr: '250px' },
                }}
            >

                {
                    children.type.name === 'Documentation' ?
                        (<Container id='main' size="3" css={{ maxWidth: '780px', position: 'relative' }}>
                            {children}
                        </Container>)
                        :
                        (<Container size="3" css={{ maxWidth: '780px', position: 'relative' }}>
                            {children}
                        </Container>)
                }



                {/* <Container size="3" css={{ maxWidth: '780px' }}>
                    {(previous || next) && (
                        <Flex
                            aria-label="Pagination navigation"
                            css={{
                                justifyContent: 'space-between',
                                my: '$9',
                            }}
                        >
                            {previous && (
                                <Box>
                                    <NextLink href={`/${previous.slug}`} passHref>
                                        <Box
                                            as="a"
                                            aria-label={`Previous page: ${previous.title}`}
                                            css={{
                                                color: '$blue11',
                                                textDecoration: 'none',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Box css={{ mb: '$2' }}>
                                                <Text size="3" css={{ color: '$slate11' }}>
                                                    Previous
                                                </Text>
                                            </Box>
                                            <Text size="5" css={{ color: 'inherit' }}>
                                                {previous.title}
                                            </Text>
                                        </Box>
                                    </NextLink>
                                </Box>
                            )}
                            {next && (
                                <Box css={{ ml: 'auto' }}>
                                    <NextLink href={`/${next.slug}`} passHref>
                                        <Box
                                            as="a"
                                            aria-label={`Previous page: ${next.title}`}
                                            css={{
                                                color: '$blue11',
                                                textDecoration: 'none',
                                                textAlign: 'right',
                                            }}
                                        >
                                            <Box css={{ mb: '$2' }}>
                                                <Text size="3" css={{ color: '$slate11' }}>
                                                    Next
                                                </Text>
                                            </Box>
                                            <Text size="5" css={{ color: 'inherit' }}>
                                                {next.title}
                                            </Text>
                                        </Box>
                                    </NextLink>
                                </Box>
                            )}
                        </Flex>
                    )}
                </Container> */}
                {/* <Container size="3" css={{ maxWidth: '780px', my: '$9' }}>
                    <Text size="3">
                        <Link
                            href={editUrl}
                            title="Edit this page on GitHub."
                            rel="noopener noreferrer"
                            target="_blank"
                            variant="subtle"
                        >
                            Edite essa página no GitHub.
                        </Link>
                    </Text>
                </Container> */}
            </Box>
        </Flex>
    );
}

export default GuidesPage