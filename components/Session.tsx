import styled from '@emotion/styled';
import SessionTitle from '../public/images/session-title.svg';
import ShareImage from '../public/images/share.svg';
import RetrospectImage from '../public/images/retrospect.svg';
import GrowthImage from '../public/images/growth.svg';

export default function Session() {
  return (
    <Container>
      <Card>
        <SessionTitle />
        <CoreValues>
          <Value>
            <ShareImage />
            <div>공유</div>
          </Value>
          <Value>
            <RetrospectImage />
            <div>회고</div>
          </Value>
          <Value>
            <GrowthImage />
            <div>성장</div>
          </Value>
        </CoreValues>
        <Description>{`미니 컨퍼런스는 챕터 구분 없이 발표자와 청중이 
        경험을 마음껏 나누고 소통할 수 있는 시간입니다.`}</Description>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 15px;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 26.5px 36px 26.5px;
  gap: 28px;
`;

const CoreValues = styled.div`
  display: flex;
  gap: 20px;
`;

const Value = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 190%;
  color: #888888;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 190%;
  white-space: pre-line;
`;
