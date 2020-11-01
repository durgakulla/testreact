import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <h3>Click the buttons</h3>
      <DurgaButton text="hello" />
      <DurgaButton text="my" />
      <DurgaButton text="name" />
      <DurgaButton text="is" />
      <DurgaButton text="Durga" />
    </div>
  );
}

const DurgaButton = ({ text }) => {
  return (
    <button className="btn btn-primary" onClick={() => alert(text)}>
      {text}
    </button>
  );
};

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active">
            Home <span class="sr-only">(current)</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default App;
