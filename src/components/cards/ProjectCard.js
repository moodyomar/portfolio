import React, { useEffect } from 'react';
import {customAos} from '../../utils/customAos';



const ProjectCard = ({id}) => { 

  useEffect(() => {
    customAos('onReach',`#${id}`,150)
})
  
return(
  <>
<div className="ProjectCard"></div>
<div className="ProjectCardInner" id={id}></div>
</>
)
}

export default ProjectCard