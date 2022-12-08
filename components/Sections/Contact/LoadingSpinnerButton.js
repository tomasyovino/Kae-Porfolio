import Image from "next/image";
import Spinner from "../../../assets/gif/spinner.gif";

const LoadingSpinnerButton = ({ buttonText, buttonLoader }) => {
  return (
    <button className='btn button-main button-scheme' id='contact-submit' type='submit'>
        { buttonLoader ? <Image src={Spinner}  alt="Loading..."  width={25} height={25} /> : buttonText }
    </button>
  )
}

export default LoadingSpinnerButton;