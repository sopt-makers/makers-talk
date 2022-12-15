import styled from '@emotion/styled';

export default function Footer() {
  return (
    <Container>
      <Copyright>Copyright 2022 by Makers Organizer</Copyright>
      <MadeBy>Design: Lee Chaeyeon (Main), Lee Yeseo / Developer: Nam Juyeong</MadeBy>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 48px 0 30px 0;
`;

const Copyright = styled.div`
  font-weight: 500;
  font-size: 9px;
  line-height: 100%;
  color: #888888;
`;

const MadeBy = styled.div`
  font-weight: 500;
  font-size: 8px;
  line-height: 100%;
  color: #555961;
`;
