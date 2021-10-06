import React from 'react';

import '../styles/Projects.css';
import '../styles/ProjectCard.css';
import Project from '../common/Project';
import Splitter from '../common/Splitter';



const Projects = () => {


  return (

    <div className='Projects'>

      <Project intro={' Project 1'} title={'DevMeet - Social Network For Developers (MERN)'} content={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."} btnClass={'readMore'} btn={'Read More'} icon={true} id={'p1'} />

      <Splitter />

      <Project intro={' Project 2'} title={'PetMe - Dog Adoption Association (MEAN)'} content={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."} btnClass={'readMore'} btn={'Read More'} icon={true} flip={true} id={'p2'} />

      <Splitter />

      <Project intro={' Project 3'} title={'BizUp - Business Meetups (MERN)'} content={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."} btnClass={'readMore'} btn={'Read More'} icon={true} id={'p3'} />

      <Splitter />
      
      <Project intro={' Project 3'} title={'CRM - Company CRM (Angular & Firebase)'} content={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."} btnClass={'readMore'} btn={'Read More'} flip={true} icon={true} id={'p4'} />



      <div className="viewall" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <button className="btn viewAll">View All</button>
      </div>

    </div>

  )
}

export default Projects