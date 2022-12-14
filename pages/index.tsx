import styled from '@emotion/styled';
import Information from '../components/Information';

export default function Home() {
  return (
    <div>
      <TempContainer>gif 영역</TempContainer>
      <Information />
    </div>
  );
}

const TempContainer = styled.div`
  height: 618px;
  background-color: royalblue;
`;
