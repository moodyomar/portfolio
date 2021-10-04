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
intro={'--Project 1'}
title={'DevMeet - Social Network For Developers (MERN)'}
para={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."}
btnClass={'readMore'}
btn={'Read More'} />
</div>
<div className="left-col">
 <ProjectCard id={'p1'} />
</div>
</div>



</div>

)
}

export default Projects