import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastroImovel() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cep, setCEP] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");
  const maxLength = 250;

  const testCadastro = () => {
    // Verifica se algum campo está vazio
    if (!name || !description || !cep || !address || !number || !city || !uf) {
      alert("Por favor, preencha todos os campos obrigatórios!");
    } else {
      alert("Cadastro realizado com sucesso!");
      // Aqui você pode adicionar lógica para salvar os dados ou navegar para outra página
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <div className="mt-10">
        <button
          onClick={() => navigate(-1)}
          className="ml-4 px-4 py-2 text-newpurple w-20 h-20 flex flex-col items-center justify-center"
        >
          <IoMdArrowBack className="w-20 h-20" />
        </button>
      </div>
      <h2 className="mt-6 ml-8 text-xl font-title text-title">
        Para começarmos, precisamos de <br />
        alguns dados
      </h2>

      <div className="space-y-4 p-6  flex flex-col">
        <input
          type="text"
          placeholder="Nome"
          className="border border-borders px-2 py-2 "
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <h4 className="mt-6 font-title text-title text-sm">
          O nome do imóvel será exibido na sua tela inicial e na
          <br />
          reserva para o hóspede.
        </h4>

        <input
          type="text"
          placeholder="Descrição"
          className="border border-borders px-2 py-2 h-28 resize-none"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          maxLength={maxLength}
        />

        <div className="text-right text-sm text-borders">
          {description.length} / {maxLength} caracteres
        </div>

        <input
          type="text"
          placeholder="CEP"
          className="border border-borders px-2 py-2 "
          value={cep}
          onChange={(event) => setCEP(event.target.value)}
        />

        <input
          type="text"
          placeholder="Endereço"
          className="border border-borders px-2 py-2 "
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />

        <div className=" bg-white flex flex-row">
          <input
            type="text"
            placeholder="Número"
            className="border border-borders px-2 py-2 w-40"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />

          <input
            type="text"
            placeholder="Complemento"
            className="border border-borders px-2 py-2 ml-6 w-24"
            value={complement}
            onChange={(event) => setComplement(event.target.value)}
          />
        </div>

        <div className=" bg-white flex flex-row">
          <input
            type="text"
            placeholder="Cidade"
            className="border border-borders px-2 py-2 w-60"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />

          <select
            className="border border-borders px-2 py-2 ml-6 w-24"
            value={uf}
            placeholder="UF"
            onChange={(event) => setUF(event.target.value)}
          >
            <option>UF</option>
            <option>Acre</option>
            <option>Alagoas</option>
            <option>Amazonas</option>
            <option>Bahia</option>
            <option>Ceará</option>
            <option>Distrito Federal</option>
            <option>Espírito Santo</option>
            <option>Goiás</option>
            <option>Maranhão</option>
            <option>Mato Grosso</option>
            <option>Mato Grosso do Sul</option>
            <option>Minas Gerais</option>
            <option>Pará</option>
            <option>Paraíba</option>
            <option>Paraná</option>
            <option>Pernambuco</option>
            <option>Piauí</option>
            <option>Rio de Janeiro</option>
            <option>Rio Grande do Norte</option>
            <option>Rio Grande do Sul</option>
            <option>Rondônia</option>
            <option>Roraima</option>
            <option>Santa Catarina</option>
            <option>São Paulo</option>
            <option>Sergipe</option>
            <option>Tocantins</option>
          </select>
        </div>

        <button
          onClick={testCadastro}
          className="  bg-newpurple px-2 py-2 text-white rounded-md"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default CadastroImovel;
