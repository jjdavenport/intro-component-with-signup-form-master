import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer";
import Form from "./components/form";
import Article from "./components/article";
import Button from "./components/button";

function App() {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div className="flex min-h-screen w-full flex-col justify-between bg-red bg-mobile bg-cover bg-no-repeat font-custom text-base text-white md:bg-desktop">
        {desktop ? (
          <>
            <div className="flex flex-1 md:gap-10 md:p-10 lg:gap-20 lg:p-20 xl:p-24">
              <section className="flex w-1/2">
                <Article />
              </section>
              <section className="flex w-1/2 flex-col justify-center gap-4">
                <Button />
                <Form />
              </section>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-1 flex-col justify-center gap-4 p-4">
              <Article />
              <Button />
              <Form />
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
