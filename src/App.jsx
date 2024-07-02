import "./index.css";
import Header from "./Header";
import Mains from "./Mains";
import Footer from "../Footer";

function App() {
  return (
    <div className='bg-main-green  mx-auto px-4 h-screen w-screen overflow-hidden'>
      <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat mt-48 mx-10 rounded-lg">
        <Header />
        <Mains />
        <Footer />
      </div>
    </div>
  );
}

export default App;
