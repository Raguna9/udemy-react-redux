import 'bulma/css/bulma.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section3 from './section-3/Section3';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={
              <div>
                <div className="has-text-centered">
                  <h1 className="title is-4 mt-4"><span style={{color: 'blue'}}>Udemy Course </span>Modern React with Redux 2023</h1>
                  <h1 className="subtitle is-6">Stephen Grider</h1>
                </div>

                <div className='has-text-centered mt-6 ml-4'>
                  <a href="section3" className="button is-info mr-2">Section 3</a>
                  <a href="section4" className="button is-info mr-2">Section 4</a>
                </div>
              </div>
            } />


            <Route path="/section3" element={<Section3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
