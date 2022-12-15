import styled from '@emotion/styled';
import SpeakerCardList from './SpeakerCardList';

export default function SpeakerIntroduction() {
  return (
    <Container>
      <Title>
        <span>7명</span>
        {`의 발표자가 들려줄
				개성 넘치는 이야기를 기대해 주세요!`}
      </Title>
      <SpeakerCardList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 180%;
  color: #ffffff;
  white-space: pre-line;
  margin-top: 64px;

  & > span {
    color: #c3ff62;
  }
`;
