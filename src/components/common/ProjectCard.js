import React, { useEffect } from 'react';
import {customAos} from '../../utils/customAos';



const ProjectCard = ({id}) => { 

  useEffect(() => {
      customAos('onReach',`#${id}`,300)
},[id])
  
return(
  <div >
<div className="ProjectCard"  style={cardStyle}></div>
<div className="ProjectCardInner" id={id} style={InnercardStyle}></div>
</div>
)
}

const cardStyle = {
borderRadius:'25px',
position:'absolute',
}
const InnercardStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '25px',
}

export default ProjectCard