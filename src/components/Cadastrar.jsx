import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Cadastrar() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/cadastro")}
      className="ml-auto mr-10 px-4 py-2 text-newpurple flex items-center gap-2"
    >
      <IoAddSharp className="w-8 h-8" />
      <span>Cadastrar imóvel</span>
    </button>
  );
}

export default Cadastrar;
