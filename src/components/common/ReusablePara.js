import React from 'react';


const ReusablePara = ({intro,title,para,btnClass='btn',btn}) => { 

return(

<>
<p>{intro}</p>
        <h2 data-aos="fade-up" data-aos-duration="1000">{title}</h2>
        <p className="para" data-aos="fade-up" data-aos-duration="2000">{para}</p>
        <div className={btnClass} data-aos="fade-up" data-aos-duration="2000">{btn}</div>
</>

)
}

export default ReusablePara