import styled from '@emotion/styled';
import Information from '../components/Information';
import LuckyDraw from '../components/LuckyDraw';
import Session from '../components/Session';
import SpeakerIntroduction from '../components/SpeakerIntroduction';

export default function Home() {
  return (
    <>
      <TempContainer>gif 영역</TempContainer>
      <Information />
      <Session />
      <SpeakerIntroduction />
      <LuckyDraw />
    </>
  );
}

const TempContainer = styled.div`
  height: 618px;
  background-color: royalblue;
`;
