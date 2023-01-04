import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { POSTER_PNG_BASE64 } from '../constants/base64';
import poster from '../public/images/poster.gif';

export default function Poster() {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoad = () => {
    setIsLoaded(true);
  };
  return (
    <Container>
      <Image src={poster} alt='poster' onLoad={onLoad} />
      {!isLoaded && <Image src={POSTER_PNG_BASE64} alt='poster' width='375' height='618' />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 618px;
  position: relative;
  & > * {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;
