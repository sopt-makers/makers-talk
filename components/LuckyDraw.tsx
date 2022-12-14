import styled from '@emotion/styled';
import LuckyDrawTitle from '../public/images/lucky-draw-title.svg';
import LuckyDrawImage from '../public/images/lucky-draw.svg';

export default function LuckyDraw() {
  return (
    <Container>
      <LuckyDrawTitle />
      <StyledLuckyDrawImage />
      <Description>{`행사 당일, 추첨을 통해 선물을 드려요!
꼭 참석하여 행운의 주인공이 되어보세요 ✨`}</Description>
    </Container>
  );
}

const Container = styled.div`
  background-color: #121315;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 20px 48px 20px;
`;

const StyledLuckyDrawImage = styled(LuckyDrawImage)`
  margin-top: 16px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 190%;
  color: #ffffff;
  white-space: pre-line;
  text-align: center;
  margin-top: 24px;
`;
