import "./index.css";
import Header from "./Header";

function App() {
  return (
    <div className='bg-main-green  mx-auto px-4 h-screen w-screen'>
      <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
        <Header />
      </div>
    </div>
  );
}

export default App;
