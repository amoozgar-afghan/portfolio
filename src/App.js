
function App() {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-gray-700">Welcome to my portfolio built with React and Tailwind CSS.</p>
        <div className="mt-6">
          <a
            href="https://github.com/amoozgar-afghan"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
