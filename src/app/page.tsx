import { About } from "./components/About";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <div className="bg-background">
      <Nav />
      <About />
    </div>
  );
}
