import React, { useEffect } from 'react';
import {customAos} from '../../utils/customAos';



const ProjectCard = ({id}) => { 

  useEffect(() => {
      customAos('onReach',`#${id}`,300)
},[id])
  
return(
  <div >
<div className="ProjectCard" ></div>
<div className="ProjectCardInner" id={id}></div>
</div>
)
}


export default ProjectCard