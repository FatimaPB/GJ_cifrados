import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import '../Estilos/CifradoCesar.css';

const CifradoCesar = () => {
    const [texto, setTexto] = useState('');
    const [desplazamiento, setDesplazamiento] = useState(3);
    const [resultado, setResultado] = useState('');

    // Función para cifrar el texto
    const cifrar = (texto: string, desplazamiento: number) => {
        return texto.replace(/[a-z]/gi, (char) => {
            const charCode = char.charCodeAt(0);
            const base = charCode >= 65 && charCode <= 90 ? 65 : 97; // Mayúscula o minúscula
            return String.fromCharCode(((charCode - base + desplazamiento) % 26) + base);
        });
    };

    // Función para manejar el evento de cifrado
    const handleCifrar = () => {
        setResultado(cifrar(texto, desplazamiento));
    };

    // Función para manejar el evento de descifrado
    const handleDescifrar = () => {
        setResultado(cifrar(texto, 26 - desplazamiento));
    };

        // Función para copiar el resultado al portapapeles
        const copiarResultado = () => {
            navigator.clipboard.writeText(resultado);
        };

    return (
        <div className="cesar-container">
            <Card title="Cifrado César" className="cesar-card">
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-mb-3">
                        <label htmlFor="texto">Texto a Cifrar/Descifrar</label><h1></h1>
                        <InputTextarea
                            id="texto"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                            rows={3}
                            cols={30}
                            autoResize
                            placeholder="Introduce el mensaje a cifrar o descifrar"
                        />
                    </div>

                    <div className="p-col-12 p-mb-3">
                        <label htmlFor="desplazamiento">Desplazamiento:</label><h1></h1>
                        <InputNumber
                            id="desplazamiento"
                            value={desplazamiento}
                            onValueChange={(e) => setDesplazamiento(e.value || 3)}
                            min={1}
                            max={25}
                        />
                    </div><h1></h1>

                    <div className="p-col-12 p-text-center p-mb-4">
                        <Button
                            label="Cifrar"
                            icon="pi pi-lock"
                            className="p-button-raised p-button-primary p-mr-2"
                            onClick={handleCifrar}
                        />
                        <Button
                            label="Descifrar"
                            icon="pi pi-unlock"
                            className="p-button-raised p-button-secondary"
                            onClick={handleDescifrar}
                        />
                    </div>
                </div>

                <Divider />

                <div className="p-col-12 p-mt-4">
                    <h3>Resultado</h3>
                    <p>{resultado}</p>
                </div>
                <Button label="Copiar Resultado" className="p-button-secondary" onClick={copiarResultado} />
            </Card>
        </div>
    );
};

export default CifradoCesar;
