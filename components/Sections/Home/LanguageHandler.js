import { useRouter } from "next/router"

const LanguageHandler = ({ languageButton }) => {
  const router = useRouter();
  
  const changeLanguage = (lang) => {
    router.push(router.pathname, router.pathname, {
      locale: lang
    })
  }

  return (
    <div className="languages d-flex align-items-center">
      <button onClick={() => changeLanguage("es")}>{languageButton.sp}</button>
      <button onClick={() => changeLanguage("en")}>{languageButton.en}</button>
    </div>
  )
}

export default LanguageHandler