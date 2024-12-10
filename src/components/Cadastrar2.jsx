import { useNavigate } from "react-router-dom";

function Cadastrar2() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/cadastro")}
      className=" px-4 py-2 text-newpurple bg-white border border-newpurple rounded-md mr-4 "
    >
      Cadastrar meu primeiro imóvel
    </button>
  );
}

export default Cadastrar2;
