import React from 'react';
import ReusablePara from '../common/ReusablePara';
import ProjectCard from '../cards/ProjectCard';

import '../styles/Projects.css';
import '../styles/ProjectCard.css';



const Projects = () => { 


return(

<div className='Projects'>


<div className="Project">
<div className="right-col">
<ReusablePara 
intro={' Project 1'}
title={'DevMeet - Social Network For Developers (MERN)'}
para={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."}
btnClass={'readMore'}
btn={'Read More'} icon={true} />

</div>
<div className="left-col">
 <ProjectCard id={'p1'} />
</div>
</div>

<div className="Project">
<div className="right-col ">
<ReusablePara 
intro={' Project 2'}
title={'PetMe - Dog Adoption Association (MEAN)'}
para={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."}
btnClass={'readMore'}
btn={'Read More'}
icon={true} />
</div>
<div className="left-col flipToRight">
 <ProjectCard id={'p2'} />
</div>
</div>

<div className="Project">
<div className="right-col">
<ReusablePara 
intro={' Project 3'}
title={'BizUp - Business Meetups (MERN)'}
para={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."}
btnClass={'readMore'}
btn={'Read More'}
icon={true} />
</div>
<div className="left-col">
 <ProjectCard id={'p3'} />
</div>
</div>

<div className="Project">
<div className="right-col ">
<ReusablePara 
intro={' Project 4'}
title={'CRM - Company CRM (Angular & Firebase)'}
para={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."}
btnClass={'readMore'}
btn={'Read More'}
icon={true} />
</div>
<div className="left-col flipToRight">
 <ProjectCard id={'p4'} />
</div>
</div>

<div className="viewall" style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
  <button className="btn">View All</button>
</div>

</div>

)
}

export default Projects