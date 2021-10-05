import React from 'react';


const ReusablePara = ({intro,title,h1,para,btnClass='btn',btn,icon=false}) => { 

return(

<>
<p><i class="fa fa-long-arrow-right" aria-hidden="true"></i>
{intro}</p>
{title ?
        <h2 data-aos="fade-up" data-aos-duration="1000">{title}</h2> : h1 }
        <p className="para" data-aos="fade-up" data-aos-duration="2000">{para}</p>
        <div className={btnClass} data-aos="fade-up" data-aos-duration="2000">{icon && <i class="fa fa-long-arrow-right" aria-hidden="true"></i>}
{btn}</div>
</>

)
}

export default ReusablePara