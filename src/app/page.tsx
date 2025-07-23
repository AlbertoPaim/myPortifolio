import { About } from "./about/About";
import { Nav } from "./components/Nav";
import { Skills } from "./skills/Skills";

export default function Home() {
  return (
    <div className="overflow-hidden bg-linear-to-b from-black  via-background to-destaqueSecundario bg- flex flex-col ">
      <Nav />
      <About />
      <Skills />
    </div>
  );
}
