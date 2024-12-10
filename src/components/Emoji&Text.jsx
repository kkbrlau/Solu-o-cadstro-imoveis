import { BsEmojiFrown } from "react-icons/bs";

function Emoji() {
  return (
    <div className="mt-20 w-full flex flex-col items-center justify-center text-center">
      <BsEmojiFrown className="text-newpurple text-6xl mr-4" />
      <h2 className="mt-4 text-text text-xl font-title2 mr-4">
        Você não tem nenhum imóvel <br />
        cadastrado. Que tal cadastrar <br />
        agora?
      </h2>
    </div>
  );
}

export default Emoji;
