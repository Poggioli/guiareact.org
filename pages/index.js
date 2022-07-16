import { Box, Container } from '@modulz/design-system';
import ContributorsSection from '../components/ContributorsSection';
import Header from '../components/Header';
import MainHero from '../components/MainHero';
import TitleAndMetaTags from "../components/TitleAndMetaTags"


export default function Page() {
  return (
    <Box>
      <TitleAndMetaTags
        title="Guia de padrões React"
        description="Um Guia de Padrões React em português."
      />
      <Header />
      <MainHero />
      <ContributorsSection />
      <Container size="3">
      </Container>
    </Box>
  )

}

export async function getStaticProps(context) {
  return {
    props: {
      cssClass: 'home',
      title: 'Guia de Padrões React'
    },
  }
}