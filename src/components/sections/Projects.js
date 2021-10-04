import React from 'react';
import ReusablePara from '../common/ReusablePara';

import '../styles/Projects.css';


const Projects = () => { 

return(

<div className='Projects'>
<div className="right-col">
<ReusablePara 
intro={'--Project 1'}
title={'DevMeet - Social Network 4 Developers'}
para={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."}
btn={'Read More'} />
</div>
<div className="left-col">

</div>
</div>

)
}

export default Projects