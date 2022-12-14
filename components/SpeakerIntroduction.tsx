import styled from '@emotion/styled';

export default function SpeakerIntroduction() {
  return (
    <Container>
      <Title>
        <span>7명</span>
        {`의 발표자가 들려줄
				개성 넘치는 이야기를 기대해 주세요!`}
      </Title>
      <Cards>연사 카드 영역</Cards>
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

const Cards = styled.div`
  height: 2254px;
  background-color: royalblue;
  width: 100%;
  margin-top: 36px;
`;
