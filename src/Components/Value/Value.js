import React, { Fragment } from 'react';
import CardAll from '../CardAll/CardAll';
import './Value.css';

export default function Value() {
  return (
    <Fragment>
      <CardAll 
        imgBackground={`${process.env.PUBLIC_URL}/assets/bgvalue.png`}
        imageSrc={`${process.env.PUBLIC_URL}/assets/value.png`} 
        buttonText='Value' 
      >
        <h4 className='mb-2'>The Association Seeks To</h4>
        <ul className="styled-list palm-list text-muted fw-light w-75 mt-0" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
          <li className='py-2'>Organize and classify farmers-young and old- to identify their essential needs utilizing scientific research to increase their agricultural abilities in the agricultural sector -both plant and livestock production.</li> 
          <li className='py-2'>Aid in developing current projects through consultation, training and educating the necessary skills to better manage their projects. These skills include researching project feasibility and such.</li>
          <li className='py-2'>Encourage farmers to organize their sector into groups and unions, join relevant associations to get their voice heard and strengthen them in their more influential collective work.</li>
          <li className='py-2'>Provide relief and social services to the families of young farmers and female project owners led by a male or female provider, especially orphaned families and marginalized families in the local community.</li>
          <li className='py-2'>Empower and support projects led by people with special needs of both genders, include them in society and empower them economically.</li>
          <li className='py-2'>Aid farmers in defending their land, their projects, their right to manage their land and their access to water and renewable energy. To protect them and support them during natural disasters through compensation in case of damages.</li>
        </ul>
<br/>
        <h4>Ad Valorem, Sensible Management:</h4>
        <ul className="styled-list flower-list text-muted fw-light w-75 mt-0" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          <li className='py-1'>The association is established on a principle of clarity and transparency that runs through its activities, procedures and objective policies evident in documentation, data saving and easy access of this data to beneficiaries, the public, relevant official bodies, donors, and funders.</li>
          <li className='py-1'>Active participation of relevant parties of both genders in the process of decision making whether inside or outside of the association.</li>
          <li className='py-1'>The association functions through a system of networking and coordination with relevant associations holding shared objectives to serve public interest and not to waste resources and efforts.</li>
          <li className='py-1'>Volunteering is a key feature of the association’s mission evident in encouraging voluntary work, opening the door for applicants to participate at work and helping others during natural disasters, crises and even war. A good number of volunteers are already working in the association.</li>
        </ul>
      </CardAll>
    </Fragment>
  );
}
