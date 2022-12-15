import styled from '@emotion/styled';

export default function Footer() {
  return (
    <Container>
      <Copyright>
        Copyright 2022 by{' '}
        <a href='https://playground.sopt.org/makers' rel='noreferrer' target='_blank'>
          Makers
        </a>{' '}
        Organizer
      </Copyright>
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

  a {
    text-decoration: underline;
  }
`;

const MadeBy = styled.div`
  font-weight: 500;
  font-size: 8px;
  line-height: 100%;
  color: #555961;
`;
