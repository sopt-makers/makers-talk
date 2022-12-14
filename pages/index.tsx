import styled from '@emotion/styled';
import Information from '../components/Information';
import Session from '../components/Session';
import SpeakerIntroduction from '../components/SpeakerIntroduction';

export default function Home() {
  return (
    <>
      <TempContainer>gif 영역</TempContainer>
      <Information />
      <Session />
      <SpeakerIntroduction />
    </>
  );
}

const TempContainer = styled.div`
  height: 618px;
  background-color: royalblue;
`;
