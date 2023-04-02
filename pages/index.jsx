import OurStory from '@/components/OurStory';
import Services from '@/components/Services';
import Deals from '@/components/Deals';
import Services2 from '@/components/Services2';
import Instagram from '@/components/Instagram';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Landing from '@/components/Landing';
import Content from '@/components/Content';
import IndexPage from '@/components/IndexPage';
export default function Home() {
  return (
    <>
      <IndexPage/>
      <Landing/>
      <Content>
        <OurStory/>
        <Services/>
        <Deals/>
        <Services2/>
        <Instagram/>
        <Contact/>
        <Footer/>
      </Content>
    </>
  )
}
