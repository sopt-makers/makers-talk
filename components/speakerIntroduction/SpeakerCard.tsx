import styled from '@emotion/styled';
import { ReactNode, useCallback } from 'react';
import { Presentation, Speaker } from './types';
import RetrospectIcon from '../../public/icons/icon-retrospect.svg';
import GrowthIcon from '../../public/icons/icon-growth.svg';
import ShareIcon from '../../public/icons/icon-share.svg';
import KimnayeonTitle from '../../public/images/speaker/kimnayeon.svg';
import KimheeyoungTitle from '../../public/images/speaker/kimheeyoung.svg';
import LeehyunwooTitle from '../../public/images/speaker/leehyunwoo.svg';
import LeejaehoonTitle from '../../public/images/speaker/leejaehoon.svg';
import SongjungwooTitle from '../../public/images/speaker/songjungwoo.svg';
import LeedonghunTitle from '../../public/images/speaker/leedonghun.svg';
import ParkjungmooTitle from '../../public/images/speaker/parkjungmoo.svg';
import { css, SerializedStyles } from '@emotion/react';

type Style = { backgroundColor: string; position: SerializedStyles };
const STYLES: Record<Presentation, Style> = {
  RETROSPECT: {
    backgroundColor: '#28AF7F',
    position: css`
      top: 0;
      right: 0;
    `,
  },
  SHARE: {
    backgroundColor: '#185EFF',
    position: css`
      top: 0;
      right: 0;
    `,
  },
  GROWTH: {
    backgroundColor: '#E28936',
    position: css`
      top: 17px;
      right: 16.15px;
    `,
  },
};

interface SpeakerCardProps {
  type: Presentation;
  speaker: Speaker;
  title: ReactNode;
}

export default function SpeakerCard({ type, speaker, title }: SpeakerCardProps) {
  const getIcon = useCallback((type: Presentation) => {
    switch (type) {
      case 'RETROSPECT':
        return <RetrospectIcon />;
      case 'GROWTH':
        return <GrowthIcon />;
      case 'SHARE':
        return <ShareIcon />;
    }
  }, []);

  const getSpeaker = useCallback((speaker: Speaker) => {
    switch (speaker) {
      case 'KIMNAYEON':
        return <KimnayeonTitle />;
      case 'KIMHEEYOUNG':
        return <KimheeyoungTitle />;
      case 'LEEHYUNWOO':
        return <LeehyunwooTitle />;
      case 'LEEJAEHOON':
        return <LeejaehoonTitle />;
      case 'SONGJUNGWOO':
        return <SongjungwooTitle />;
      case 'LEEDONGHUN':
        return <LeedonghunTitle />;
      case 'PARKJUNGMOO':
        return <ParkjungmooTitle />;
    }
  }, []);

  return (
    <Container type={type}>
      {getSpeaker(speaker)}
      {getIcon(type)}
      {title}
    </Container>
  );
}

const Container = styled.div<{ type: Presentation }>`
  width: 100%;
  background-color: ${({ type }) => STYLES[type].backgroundColor};
  border-radius: 14px;
  padding: 31.42px 20px 24px 20px;
  position: relative;

  & > *:nth-child(1) {
  }

  & > *:nth-child(2) {
    position: absolute;

    ${({ type }) => STYLES[type].position}
  }

  & > *:nth-child(3) {
  }
`;
