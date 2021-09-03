import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../../typings/car';
import { Car } from '../../components/car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';

import '@brainhubeu/react-carousel/lib/style.css';

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

// const EmptyCars = styled.div`
//   ${tw`
//     w-full
//     flex
//     justify-center
//     items-center
//     text-sm
//     text-gray-500
//   `};
// `;

// const LoadingContainer = styled.div`
//   ${tw`
//     w-full
//     mt-9
//     flex
//     justify-center
//     items-center
//     text-base
//     text-black
//   `};
// `;

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const testCar: ICar = {
    name: 'Audi S3 Car',
    mileage: '10k',
    thumbnailSrc:
      'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
    dailyPrice: 100,
    monthlyPrice: 2500,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const testCar2: ICar = {
    name: 'HONDA City 5 Seater Car',
    mileage: '20k',
    thumbnailSrc:
      'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const testCar3: ICar = {
    name: 'TOYOTA Super Grandia',
    mileage: '18k',
    thumbnailSrc:
      'https://imgcdn.zigwheels.ph/medium/gallery/color/30/2070/toyota-hiace-color-803575.jpg',
    dailyPrice: 80,
    monthlyPrice: 2200,
    gearType: 'Auto',
    gas: 'Diesel',
  };

  const testCar4: ICar = {
    name: 'FORD WildTrak Pickup',
    mileage: '33k',
    thumbnailSrc:
      'https://da4dkroembtou.cloudfront.net/wp-content/uploads/2018/01/Ford-Ranger-Wildtrak-in-Meteor-Grey-01-1024x656.jpg',
    dailyPrice: 75,
    monthlyPrice: 1800,
    gearType: 'Manual',
    gas: 'Diesel',
  };
  const testCar5: ICar = {
    name: 'NISSAN Terra',
    mileage: '28k',
    thumbnailSrc:
      'https://s3-ap-southeast-1.amazonaws.com/carmudi-blogs-new/carmudi-ph/wp-content/uploads/2019/11/08105829/nissan-terra-black.jpg',
    dailyPrice: 80,
    monthlyPrice: 2200,
    gearType: 'Manual',
    gas: 'Diesel',
  };

  const testCar6: ICar = {
    name: 'PORSCHE 911',
    mileage: '10k',
    thumbnailSrc: 'https://pngimg.com/uploads/porsche/porsche_PNG10624.png',
    dailyPrice: 120,
    monthlyPrice: 2500,
    gearType: 'Manual',
    gas: 'Petrol',
  };

  const testCar7: ICar = {
    name: 'JEEP Rubicon',
    mileage: '13k',
    thumbnailSrc:
      'https://di-uploads-pod21.dealerinspire.com/almgwinnett/uploads/2021/01/0e2824ef6d67f64037c856f5afbb41ba.png',
    dailyPrice: 110,
    monthlyPrice: 2300,
    gearType: 'Manual',
    gas: 'Petrol',
  };

  const cars = [
    <Car {...testCar7} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar3} />,
    <Car {...testCar4} />,
    <Car {...testCar5} />,
    <Car {...testCar6} />,
  ];

  return (
    <TopCarsContainer>
      <Title>Find Out More About Our Top Cars</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            'clickToChange',

            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ],
            },
          }}
        />
        <Dots
          value={current}
          onChange={setCurrent}
          number={isMobile ? cars.length : Math.round(cars.length / 2) + 1}
        />
      </CarsContainer>
    </TopCarsContainer>
  );
}
