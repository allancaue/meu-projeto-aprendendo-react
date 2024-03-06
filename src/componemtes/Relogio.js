import './Relogio.css';
import React, { useState, useEffect } from 'react';

function Relogio(props) {

    const [horas, setHoras] = useState("00");
    const [minutos, setMinutos] = useState("00");
    const [segundos, setSegundos] = useState("00");
  
    useEffect(() => {
        const relogio = setInterval(() => {
            const deteTodey = new Date().toLocaleTimeString('pt-BR', {timeZone: props.timeZone});
            const [hr, min, se] = deteTodey.split(/:|\s/);
            
            setHoras(hr.padStart(2,'0'));
            setMinutos(min.padStart(2,'0'));
            setSegundos(se.padStart(2,'0'));
        }, 1000);
      
        return () => clearInterval(relogio);
      }, [props.timeZone]);
      
    
    return (
        <div className ="Relogio">

            <div className = "Hora">
                <p id = "Horas">{horas}</p>
                <p className = "tempo">Horas</p>
            </div>

            <div className = "Minuto">
                <p id = "Minutos">{minutos}</p>
                <p className = "tempo">Minutos</p>
            </div>

            <div className = "Segundo">
                <p id = "Segundos">{segundos}</p>
                <p className = "tempo">Segundos</p>
            </div>

        </div>
    )
}

export default Relogio