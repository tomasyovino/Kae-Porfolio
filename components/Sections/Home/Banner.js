import Image from 'next/image'
import TextAnimation from './TextAnimation';
import { Twitter, AlternateEmail, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import bannerMoon from "../../../assets/img/bannerAsset.jpg";

const Banner = ({ textAnimation }) => {
  
  return (
    <>
      <TextAnimation textAnimation={textAnimation} />
      <div className="social-media d-flex flex-column align-items-center">
          <a href='#'><Twitter /></a>
          <a href='#'><AlternateEmail /></a>
          <a href='#'><LinkedIn /></a>
          <a href='#'><GitHub /></a>
          <a href='#'><Instagram /></a>
      </div>
      <Image src={bannerMoon} className="bannerImg" />
    </>
  )
}

export default Banner