import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import JeepImg from '../../../assets/images/jeep.png';
import BlobImg from '../../../assets/images/blob.svg';
import { SCREENS } from '../../components/responsive';

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const LeftContainer = styled.div`
  margin-left: -20em;
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-10
    
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-2xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-none
    lg:leading-snug
    xl:leading-tight
    sm:tracking-normal
    lg:tracking-wide
    xl:tracking-wider
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    max-h-12
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
  width: 35em;
  height: 15em;
  position: absolute;
  left: 15em;
  top: 7em;
  z-index: -1;
  transform: rotate(-210deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 50em;
    max-height: 15em;
    left: 18em;
    top: 5em;
    transform: rotate(-210deg);
  }
  @media (min-width: ${SCREENS.md}) {
    width: 55em;
    max-height: 30em;
    left: 15em;
    top: 10em;
    transform: rotate(-210deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 18em;
    left: 18em;
    top: 18em;
    transform: rotate(-190deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    left: 15em;
    bottom: -10em;
    transform: rotate(-210deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -20em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -20em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -18em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -20em;
    top: -9em;
  }
`;

export function AboutUs() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <BlobContainer>
          <img src={BlobImg} alt="blob" />
        </BlobContainer>
        <StandaloneCar>
          <img src={JeepImg} alt="car" />
        </StandaloneCar>
      </LeftContainer>
      <RightContainer>
        <Slogan>The Best Experience With Our Rental Deals</Slogan>
        <Description>
          We have the Best Deals in Town. You can choose any type of Ride from
          our Fleet of Vehicles. Our vehicles are well maintained to give you
          the comfort and hassle free ride that you deserve.
        </Description>
      </RightContainer>
    </TopSectionContainer>
  );
}
