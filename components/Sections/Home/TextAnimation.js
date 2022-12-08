import Typewriter from "typewriter-effect";

const TextAnimation = ({ textAnimation }) => {
  return (
    <div className="home-content">
        <h1>Tomás Yovino</h1>
        <Typewriter 
          options={{
            strings: [textAnimation[0], textAnimation[1]],
            autoStart: true,
            loop: true,
          }}
        />
    </div>
  )
}

export default TextAnimation