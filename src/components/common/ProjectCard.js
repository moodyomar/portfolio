import React, { useEffect } from 'react';
import {customAos} from '../../utils/customAos';



const ProjectCard = ({id}) => { 

  useEffect(() => {
      customAos('onReach',`#${id}`,300)
},[id])
  
return(
  <div data-aos="zoom-in" data-aos-duration="1000">
<div className="ProjectCard" ></div>
<div className="ProjectCardInner" id={id}></div>
</div>
)
}


export default ProjectCard