import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import CarLogoImg from '../../../assets/images/Logo.png';
import CarLogoDarkImg from '../../../assets/images/Logo.png';

interface ILogoProps {
  color?: 'white' | 'dark';
  bgColor?: 'white' | 'dark';
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
  ${({ color }: any) => (color === 'white' ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;

  ${tw`h-6
   pl-3
   lg:pl-0
   md:h-9
   
  `};
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;

  return (
    <LogoContainer>
      <Image>
        <img
          src={bgColor === 'dark' ? CarLogoDarkImg : CarLogoImg}
          alt="logo"
        />
      </Image>
      <LogoText color={color || 'dark'}></LogoText>
    </LogoContainer>
  );
}
