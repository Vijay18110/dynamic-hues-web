import { FaReact, FaNodeJs, FaCss3, FaJs, FaSquareGit } from "react-icons/fa6";
import { DiBootstrap, DiGithub, DiMongodb, DiNpm, DiJqueryLogo } from "react-icons/di";
import { SiExpress, SiJson, SiRedux } from "react-icons/si";
import { MdOutlineHtml, MdOutlineDataset } from "react-icons/md";
import { PiFileJsxFill } from "react-icons/pi";
import { ReactNode } from "react";

export interface Skill {
  id: number;
  icon: ReactNode;
  name: string;
}

export const skills: Skill[] = [
  { id: 1, icon: <FaReact size={40} />, name: "React.js" },
  { id: 14, icon: <SiRedux size={40} />, name: "Redux.js" },
  { id: 2, icon: <FaNodeJs size={40} />, name: "Node.js" },
  { id: 3, icon: <DiMongodb size={40} />, name: "MongoDB" },
  { id: 4, icon: <SiExpress size={40} />, name: "Express" },
  { id: 5, icon: <MdOutlineHtml size={40} />, name: "HTML" },
  { id: 6, icon: <FaCss3 size={40} />, name: "CSS" },
  { id: 7, icon: <FaJs size={40} />, name: "JavaScript" },
  { id: 8, icon: <DiJqueryLogo size={40} />, name: "jQuery" },
  { id: 9, icon: <DiBootstrap size={40} />, name: "Bootstrap" },
  { id: 10, icon: <DiNpm size={40} />, name: "npm" },
  { id: 11, icon: <PiFileJsxFill size={40} />, name: "JSX" },
  { id: 12, icon: <SiJson size={40} />, name: "JSON" },
  { id: 13, icon: <MdOutlineDataset size={40} />, name: "DSA" },
  { id: 15, icon: <FaSquareGit size={40} />, name: "Git" },
  { id: 16, icon: <DiGithub size={40} />, name: "GitHub" },
];
