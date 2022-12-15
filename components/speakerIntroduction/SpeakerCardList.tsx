import SpeakerCard from './SpeakerCard';
import styled from '@emotion/styled';

export default function SpeakerCardList() {
  return (
    <Container>
      <SpeakerCard type='RETROSPECT' speaker='SONGJUNGWOO' title={<SingleTitle>유럽에서 개발하기</SingleTitle>} />
      <SpeakerCard
        type='RETROSPECT'
        speaker='KIMNAYEON'
        title={
          <MultilineTitleWithDescription>
            <Title>{`연말을 마무리하고
연초를 준비하는 방법`}</Title>
            <SmallDescription>: 미리 1년을 마무리하고 내년을 준비하면 좋은 이유</SmallDescription>
          </MultilineTitleWithDescription>
        }
      />
      <SpeakerCard
        type='RETROSPECT'
        speaker='LEEHYUNWOO'
        title={
          <SingleTitleWithDescription>
            <Title>내가 할 수 있었던 모든 것</Title>
            <Description>: SOPT에 들어오고 못한 지난 날 돌아보기</Description>
          </SingleTitleWithDescription>
        }
      />
      <SpeakerCard
        type='SHARE'
        speaker='LEEDONGHUN'
        title={
          <SingleTitleWithDescription>
            <Title>생각보다 쉬운 강의 만들기</Title>
            <Description>: 쏠쏠한 수익 만들기</Description>
          </SingleTitleWithDescription>
        }
      />
      <SpeakerCard
        type='SHARE'
        speaker='PARKJUNGMOO'
        title={
          <MulitlineTitle>
            {`사이드 프로젝트를 위한
클라우드 서비스 무료 플랜 정리`}
          </MulitlineTitle>
        }
      />
      <SpeakerCard type='GROWTH' speaker='LEEJAEHOON' title={<SingleTitle>나의 자존감 회복기</SingleTitle>} />
      <SpeakerCard
        type='GROWTH'
        speaker='KIMHEEYOUNG'
        title={
          <SingleTitleWithDescription>
            <Title>나는 어떤 회사를 다녀야 하나</Title>
            <Description>: 2년차 초짜 직장인의 현실 고민</Description>
          </SingleTitleWithDescription>
        }
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 36px 32px 60px 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #ffffff;
  white-space: pre-line;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin-top: 4px;
`;

const SingleTitle = styled(Title)`
  margin-top: 168.48px;
`;

const MulitlineTitle = styled(Title)`
  margin-top: 138.48px;
`;

const SmallDescription = styled(Description)`
  font-size: 13px;
  line-height: 16px;
`;

const MultilineTitleWithDescription = styled.div`
  margin-top: 118.77px;
`;

const SingleTitleWithDescription = styled.div`
  margin-top: 144.77px;
`;
