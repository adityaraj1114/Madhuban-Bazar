import "./App.css";
import { CustomNavbar } from "./Components/CustomNavbar";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <Home />

      {/* <CustomNavbar /> */}

      <div className="container">
        <h1 className="text-center mt-3">Welcome</h1>
        <p className="lead text-center">To Your own Mart!</p>
      </div>

      
      <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
            <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
              <h5 className="card-title mt-2">Shoes & Shirt</h5>
              <p className="card-text">
                Rs 999
              </p>
              <a href="#" className="btn btn-primary">
                Order Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
            <img src="https://images.pexels.com/photos/23384639/pexels-photo-23384639/free-photo-of-figs-with-milk-in-glass-jar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="..."/>
              <h5 className="card-title mt-2">Pickles</h5>
              <p className="card-text">
                Rs 550
              </p>
              <a href="#" className="btn btn-primary">
                Order Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
            <img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
              <h5 className="card-title mt-2">Umbrella</h5>
              <p className="card-text">
                Rs 299
              </p>
              <a href="#" className="btn btn-primary">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
