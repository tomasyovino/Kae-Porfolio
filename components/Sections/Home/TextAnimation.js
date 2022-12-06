import Typewriter from "typewriter-effect";

const TextAnimation = () => {
  return (
    <div className="home-content">
        <h1>Tomás Yovino</h1>
        <Typewriter 
          options={{
            strings: ["Desarrollador Fullstack", "Diseñador Web", "Diseñador UX/UI"],
            autoStart: true,
            loop: true,
          }}
        />
    </div>
  )
}

export default TextAnimation