import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import FormSignUp from "./components/form-signup/FormSignUp";
import Footer from "./components/footer/Footer";
import { publicRoutes } from "./Routes";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        {
        publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={< route.component />}
            ></Route>
          );
        })}
      </Routes>
      <FormSignUp />
      <Footer />
    </>
  );
}

export default App;
