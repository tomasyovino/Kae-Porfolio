import Image from 'next/image'
import { Twitter, AlternateEmail, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import bannerMoon from "../../../assets/img/bannerAsset.jpg";

const Banner = () => {
  return (
    <section id="home" className="d-flex justify-content-center align-items-center">
      <div className="languages d-flex align-items-center">
        <span>SPA</span>
        <span>ENG</span>
      </div>
      <div className="home-content">
        <h1>Tomás Yovino</h1>
        <h4>Desarrollador Fullstack</h4>
      </div>
      <div className="social-media d-flex flex-column align-items-center">
        <a href='#'><Twitter /></a>
        <a href='#'><AlternateEmail /></a>
        <a href='#'><LinkedIn /></a>
        <a href='#'><GitHub /></a>
        <a href='#'><Instagram /></a>
      </div>
      <Image src={bannerMoon} className="bannerImg" />
    </section>
  )
}

export default Banner