import { components, MDXProvider } from '../../../../components/MDXComponent';
import { QuickNav } from '../../../../components/QuickNav';
import TitleAndMetaTags from '../../../../components/TitleAndMetaTags';
import { Box } from '@modulz/design-system';
import React from 'react';
import Markdown from "./intro.md"
import { RemoveScroll } from 'react-remove-scroll';
import MdContainer from '../../../../components/mdcontainer';

export default function IntroGettingStartedDoc() {

  return (
    <>
      <TitleAndMetaTags
        title="Introdução – Guia de padrões React"
        description="A razão de um guia de padrões React em Português."
      />

      <MdContainer markdown={Markdown} />


      {/* <MDXProvider frontmatter={frontmatter}>
        <Component
          components={{ ...components }}
        />
      </MDXProvider> */}

      <Box
        as="aside"
        // Components that hide the scrollbar (like Dialog) add padding to
        // account for the scrollbar gap to avoid layout jank. This does not
        // work for position: fixed elements. Since we use react-remove-scroll
        // under the hood for those primitives, we can add this helper class
        // provided by that lib to deal with that for the QuickNav.
        // https://github.com/radix-ui/website/issues/64
        // https://github.com/theKashey/react-remove-scroll#positionfixed-elements
        className={RemoveScroll.classNames.zeroRight}
        css={{
          display: 'none',
          '@media (min-width: 1440px)': {
            display: 'block',
            width: 250,
            flexShrink: 0,
            zIndex: 1,
            position: 'fixed',
            top: '$sizes$8',
            right: 0,
            bottom: 0,
          },
        }}
      >
        <QuickNav key="Intro" />
      </Box>
    </>
  );
}

// export async function getStaticPaths() {
//   const frontmatters = getAllFrontmatter('getting-started');

//   return {
//     paths: frontmatters.map((frontmatter) => ({
//       params: { slug: frontmatter.slug.replace('getting-started/', '') },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const { frontmatter, code } = await getMdxBySlug('getting-started/', context.params.slug);
//   return { props: { frontmatter, code } };
// }
