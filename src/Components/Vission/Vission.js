import React from 'react'
import CardAll from '../CardAll/CardAll';

export default function Vission() {
  return (
  <CardAll
    imgBackground={`${process.env.PUBLIC_URL}/assets/bgvission.png
      `}
  imageSrc={`${process.env.PUBLIC_URL}/assets/vission.png`} 
  buttonText='Vission'>
  <p className="text-muted fw-light w-75 ps-sm-0 mt-md-3 " style={{ fontSize: '1rem', lineHeight: '1.8'}}>The association seeks to serve, promote and empower a sustainable community in which there is full respect and societal peace in all sectors especially the agricultural sector in order to take care of land and human life development especially for farmers. In addition, it seeks to cultivate rural areas to secure farmers’ essential needs autonomously and independently taking best advantage of human and natural resources to achieve food security thus empowering Palestinian economy.</p>
</CardAll>
  )
}
