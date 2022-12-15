import styled from '@emotion/styled';

import Logo from '../public/images/logo.svg';

export default function Information() {
  return (
    <Container>
      <Logo />
      <Greetings>
        {`2022년의 끝자락. 
				경험을 나누며 지난 날을 회고하고, 새로운 성장의 발판이 
				되어줄 메이커스톡에 초대합니다!`}
      </Greetings>
      <DateAndTime>
        <Label>When</Label>
        <Content>2022.12.19 MON</Content>
        <Content>20:00 - 22:30</Content>
      </DateAndTime>
      <Place>
        <Label>Where</Label>
        <Content>프로그래머스 Ada 강의실</Content>
        <Address>서울 서초구 강남대로 327 2층</Address>
      </Place>
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(0deg, #010101 22.33%, #185eff 314.11%);
  display: flex;
  flex-direction: column;
  padding: 48px 30px 65px 30px;
`;

const Greetings = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 190%;
  white-space: pre-line;
  margin-top: 32px;
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 11px;
  color: #c3ff62;
  margin-bottom: 2px;
`;

const Content = styled.div`
  font-weight: 800;
  font-size: 20px;
`;

const DateAndTime = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  row-gap: 2px;
  margin-top: 64px;

  & > *:first-child {
    grid-column: 1 / span 2;
  }
`;

const Place = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 32px;
`;

const Address = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #888888;
`;
