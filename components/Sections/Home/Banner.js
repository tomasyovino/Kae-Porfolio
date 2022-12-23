import Image from 'next/image'
import TextAnimation from './TextAnimation';
import { Twitter, AlternateEmail, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import bannerMoon from "../../../assets/img/bannerAsset.jpg";

const Banner = ({ textAnimation }) => {
  
  return (
    <>
      <TextAnimation textAnimation={textAnimation} />
      <div className="social-media d-flex flex-column align-items-center">
          <a href='https://twitter.com/TomasYovino' target="_blank" rel="noopener noreferrer"><Twitter /></a>
          <a href='mailto:tomasyovino@gmail.com' target="_blank" rel="noopener noreferrer"><AlternateEmail /></a>
          <a href='https://www.linkedin.com/in/tomás-yovino-a0955a238/' target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
          <a href='https://github.com/tomasyovino' target="_blank" rel="noopener noreferrer"><GitHub /></a>
          <a href='https://www.instagram.com/tomasyovino/' target="_blank" rel="noopener noreferrer"><Instagram /></a>
      </div>
      <Image src={bannerMoon} className="bannerImg" />
    </>
  )
}

export default Banner