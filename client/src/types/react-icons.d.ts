import * as React from 'react';

declare module 'react-icons/fa' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = React.ComponentType<IconBaseProps>;

  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaEnvelope: IconType;
  export const FaCode: IconType;
  export const FaBars: IconType;
  export const FaTimes: IconType;
  export const FaPhone: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaPaperPlane: IconType;
  export const FaServer: IconType;
  export const FaLaptopCode: IconType;
  export const FaUserGraduate: IconType;
  export const FaHome: IconType;
  export const FaExternalLinkAlt: IconType;
  export const FaDownload: IconType;
  export const FaBriefcase: IconType;
  export const FaGraduationCap: IconType;
  export const FaCertificate: IconType;
  export const FaTrophy: IconType;
} 