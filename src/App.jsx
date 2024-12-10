import "./App.css";
import Back from "./components/Back";
import Cadastrar from "./components/Cadastrar";
import Indisponible from "./components/Indisponible";
import Show from "./components/Show";
import Emoji from "./components/Emoji&Text";
import Cadastrar2 from "./components/Cadastrar2";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function App() {
  //const [imoveis, setImoveis] = useState([]);

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <div className="w-full h-28 flex flex-row items-center">
        <Back />

        <Cadastrar />
      </div>

      <h1 className="font-title text-left ml-9 mt-4 text-2xl text-title ">
        Bem-vindo, João!
      </h1>
      <div className="w-full h-28 flex flex-row items-center">
        <Show />
        <Indisponible />
      </div>

      <Emoji />
      <div className="w-full h-20 flex items-center justify-center">
        <Cadastrar2 />
      </div>

      <div className="w-full h-40 bg-newpurple absolute bottom-0 rounded-t-lg flex justify-center items-center ">
        <FaRegBuilding className="text-white w-8 h-8 mb-16 mr-16" />
        <FaRegCalendarAlt className="text-text w-8 h-8 mb-16 mr-20" />
        <CiViewTable className="text-text w-8 h-8 mb-16 mr-16" />
        <CiUser className="text-text w-8 h-8 mb-16 mr-4" />
      </div>
    </div>
  );
}

export default App;
