import React ,{useEffect}from 'react';

import './global.css'
import './App.css'
import './sidebar.css'
import './main.css'


function App() {
  const [latitude, setLatitude] = useEffect(''); 
  const [longitude, setLongitude] = useEffect(''); 
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude,longitude} = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err)=>{
        console.log(err);
      },{
        timeout:3000,
      }
    );
  },[]);  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário de Github</label>
            <input name="github_username" id="github_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude"
                required value={latitude}
                onChange={e=> setLatitude(e.target.value)}/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" 
                required value={longitude} 
                onChange={e=> setLongitude(e.target.value)}/>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
              alt="foto do perfil" />
              <div className="user-info">
                <strong>Diego</strong>
                <span>ReactJS,React native</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <a href="https://github.com/diego3g" >Acessar Perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
              alt="foto do perfil" />
              <div className="user-info">
                <strong>Diego</strong>
                <span>ReactJS,React native</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <a href="https://github.com/diego3g" >Acessar Perfil do Github</a>
          </li><li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
              alt="foto do perfil" />
              <div className="user-info">
                <strong>Diego</strong>
                <span>ReactJS,React native</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <a href="https://github.com/diego3g" >Acessar Perfil do Github</a>
          </li><li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
              alt="foto do perfil" />
              <div className="user-info">
                <strong>Diego</strong>
                <span>ReactJS,React native</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <a href="https://github.com/diego3g" >Acessar Perfil do Github</a>
          </li>
        </ul>
      </main>
    
    </div>
  );
}

export default App;
