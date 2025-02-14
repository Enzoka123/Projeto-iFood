import { useState } from "react";
import "./App.css";

const TextInput: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    alert(`Dados enviados!\nNome: ${nome}\nE-mail: ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500 p-4">
      <h1 className="text-3xl font-bold text-black-500 mb-6">Cadastro</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Nome:
        </label>
        <input
          type="text"
          id="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />

        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mt-4 mb-2"
        >
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="mt-6 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <TextInput />
    </div>
  );
}

export default App;
