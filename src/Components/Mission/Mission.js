import React from 'react'
import CardAll from '../CardAll/CardAll';
export default function Mission() {
  return (
    <div>

      <CardAll
      imgBackground={`${process.env.PUBLIC_URL}/assets/bgmission.png`}
      imageSrc={`${process.env.PUBLIC_URL}/assets/mission.jpeg`}    buttonText='Mission' >
      <p className="text-muted fw-light w-75 mt-0 ps-sm-4 " style={{ fontSize: '1rem', lineHeight: '1.8'}}>The association seeks to aid farmers -including young farmers- and to support them through studying their needs and working to reinforce their steadfastness through participation in developmental and relief projects, networking with partner associations and unifying efforts in field activities in rural areas, especially projects owned by women who depend on agriculture to support their families -whether poultry or vegetative projects- in the absence of their main provider. The association seeks to realize this through training, increasing abilities to manage economic projects and improving agricultural produce consequently empowering the Palestinian economy.</p>
</CardAll>
      
  
    </div>
  )
}