import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex-1 p-4 bg-white min-h-screen">
        <h1>Conteúdo principal</h1>
      </div>
    </div>
  );
}

export default App;
