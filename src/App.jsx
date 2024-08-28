import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer";
import Form from "./components/form";
import Article from "./components/article";
import Button from "./components/button";

function App() {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div className="flex flex-col justify-between bg-mobile bg-cover bg-no-repeat text-base md:bg-desktop">
        {desktop ? (
          <>
            <section>
              <Article />
            </section>
            <section>
              <Button />
              <Form />
            </section>
          </>
        ) : (
          <>
            <Article />
            <Button />
            <Form />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
