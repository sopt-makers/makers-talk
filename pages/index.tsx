import Image from 'next/image';
import Footer from '../components/Footer';
import Information from '../components/Information';
import LuckyDraw from '../components/LuckyDraw';
import Session from '../components/Session';
import SpeakerIntroduction from '../components/speakerIntroduction';
import poster from '../public/images/poster.gif';

export default function Home() {
  return (
    <>
      <Image src={poster} alt='poster' />
      <Information />
      <Session />
      <SpeakerIntroduction />
      <LuckyDraw />
      <Footer />
    </>
  );
}
