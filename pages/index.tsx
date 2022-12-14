import styled from '@emotion/styled';
import Information from '../components/Information';
import Session from '../components/Session';

export default function Home() {
  return (
    <div>
      <TempContainer>gif 영역</TempContainer>
      <Information />
      <Session />
    </div>
  );
}

const TempContainer = styled.div`
  height: 618px;
  background-color: royalblue;
`;
