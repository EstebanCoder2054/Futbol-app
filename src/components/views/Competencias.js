import React, { useState, useEffect } from "react";
import imagen from "../../assets/imagen.png";
import Competencia from "./Competencia";

const Competencias = () => {
  const [error, setError] = useState(false);
  const [pais, setPais] = useState("");
  const [enviar, setEnviar] = useState(1);
  const [competencias, setCompetencias] = useState([]);

  //API KEY
  const apikey =
    "065ad1ab50f16807aeb2ab408929714ed9e2b74cc1bb683d81af4c1f2ad08e96";

  useEffect(() => {
    console.log(pais);
    const consultarAPI = async () => {
      const url = `https://apiv2.apifootball.com/?action=get_leagues&country_id=${pais}&APIkey=${apikey}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      //guardando la info que me trae la API en el state
      setCompetencias(resultado);
      console.log(resultado);
    };
    consultarAPI();
  },[pais]);

  //cuando se presiona el botón de enviar
  const handleSubmit = e => {
    e.preventDefault();

    if (pais === "") {
      //swwtalert acá
      alert("error, campos obligatorios");
      return;
    }

    setEnviar(enviar + 1);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={imagen} alt="imagen balón" className="logotipo my-3 mx-5" />
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="exampleFormControlSelect1">
                Seleccionador de ligas por país
              </label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={e => setPais(e.target.value)}
              >
                <option value="">-Selecciona el País-</option>
                <option value="29">Colombia</option>
                <option value="41">Inglaterra</option>
                <option value="46">Francia</option>
                <option value="51">Alemania</option>
                <option value="135">-España</option>
                <option value="5">Argentina</option>
                <option value="19">Brasil</option>
                <option value="165">Europa</option>
                <option value="168">World</option>
              </select>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block mt-2"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6 col-sm-12">
          <h1>Acá van los resultados</h1>
          {competencias.map(competencia=>{
            return(
              <Competencia
                competencias={competencias}
              />
            )
            
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Competencias;
