import Footer from '../components/Footer';
import Poster from '../components/Poster';
import Information from '../components/Information';
import LuckyDraw from '../components/LuckyDraw';
import Session from '../components/Session';
import SpeakerIntroduction from '../components/speakerIntroduction';

export default function Home() {
  return (
    <>
      <Poster />
      <Information />
      <Session />
      <SpeakerIntroduction />
      <LuckyDraw />
      <Footer />
    </>
  );
}
