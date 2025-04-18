import css from "./HomePage.module.css"
const HomePage = () => {
  return(
    <p className={css.p}>
      This application covers the main features of working with React. Namely, routing, redux, requests to the server, authorization, saving and using data in localstorage, using the Formik library for forms, the Axios library for working with API
    </p>
  )
}

export default HomePage;