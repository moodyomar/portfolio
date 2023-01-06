import {FaWordpress,FaElementor,FaReact,FaCss3Alt,FaNodeJs} from "react-icons/fa"
import {SiJavascript,SiMongodb,SiAngular,SiFirebase,SiDocker,
  SiPython,SiJenkins, SiKubernetes,SiTerraform, SiMicrosoftazure} from "react-icons/si"
import {DiBootstrap} from "react-icons/di"
import {TiHtml5} from "react-icons/ti"
import Apicon from "../assets/Apicon"


export const getIcon = (tool) => {
  switch (tool) {
    case 'wp':
      return <FaWordpress/>
  
    case 'el':
      return <FaElementor/>
  
    case 'css':
      return <FaCss3Alt/>
  
    case 'js':
      return <SiJavascript/>

    case 'py':
      return <SiPython/>

    case 'jenkis':
      return <SiJenkins/>

    case 'k8s':
      return <SiKubernetes/>

    case 'docker':
      return <SiDocker/>

    case 'tf':
      return <SiTerraform/>

    case 'azure':
      return <SiMicrosoftazure/>
  
    case 'fb':
      return <SiFirebase/>
  
    case 'ang':
      return <SiAngular/>
  
    case 'react':
      return <FaReact/>
  
    case 'html':
      return <TiHtml5/>
  
    case 'njs':
      return <FaNodeJs/>
  
    case 'mdb':
      return <SiMongodb/>
  
    case 'bs':
      return <DiBootstrap/>
    case 'api':
      return <Apicon/>
  
    default:
      break;
  }
}