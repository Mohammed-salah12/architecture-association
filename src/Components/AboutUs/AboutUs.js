import React, { Fragment } from 'react';
import CardAll from '../CardAll/CardAll';
import './Aboutus.css'
export default function AboutUs() {
  return (
    <Fragment>
      <CardAll buttonText="About Us" 
      imgBackground={`${process.env.PUBLIC_URL}/assets/bg.png`}
      imageSrc={`${process.env.PUBLIC_URL}/assets/aboutus.png`}>
        <p className="text-muted fw-light w-75 mt-0 ps-sm-4 pt-2" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
         The Developmental Agricultural Association is a non-profit, non-governmental association, licensed as a charitable organization according to
          Law of Charitable and Civil Organizations Act No (1) of the year 2000 under No (7779).
          <br />
        The association was founded in the Middle Area, more specifically Salqa Valley area in Deir El Balah city, the Gaza Strip, as a neutral, civil organization that operates transparently to provide services to the agricultural sector and all farmers of both genders in their locations as its scope of work extends to outside the middle governorate to the entirety of homeland.
        </p>
      </CardAll>
    </Fragment>
  );
}
