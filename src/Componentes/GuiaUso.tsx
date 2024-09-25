import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../Estilos/GuiaUso.css'; // Puedes usar este archivo para añadir estilos adicionales si lo deseas

const GuiaUso: React.FC = () => {
    return (
        <div className="guia-container">
            <Card title="Guía de Uso" className="guia-card">
                <h3>Bienvenido a la herramienta de cifrado</h3>
                <p>
                    Esta aplicación te permite cifrar y descifrar mensajes utilizando dos métodos: 
                    <strong> Cifrado César</strong> y <strong>Cifrado Escítala</strong>.
                </p>

                <h4>Cifrado César</h4>
                <p>
                    El Cifrado César es un tipo de cifrado por sustitución en el que cada letra del mensaje es desplazada un número fijo de posiciones en el alfabeto. 
                    Aquí tienes cómo usarlo:
                </p>
                <ol>
                    <li>Introduce el mensaje que deseas cifrar en el campo correspondiente.</li>
                    <li>Especifica el desplazamiento (clave) en el campo indicado.</li>
                    <li>Haz clic en el botón "Cifrar" para obtener el mensaje cifrado.</li>
                    <li>Si deseas descifrar un mensaje, introduce el mensaje cifrado y la misma clave, luego haz clic en "Descifrar".</li>
                </ol>

                <h4>Cifrado Escítala</h4>
                <p>
                    El Cifrado Escítala es un método de cifrado en el que el texto se organiza en una serie de filas y columnas. 
                    Aquí están los pasos para usarlo:
                </p>
                <ol>
                    <li>Introduce el mensaje que deseas cifrar en el campo correspondiente.</li>
                    <li>Especifica el número de filas que deseas usar como clave.</li>
                    <li>Haz clic en el botón "Cifrar" para obtener el mensaje cifrado.</li>
                    <li>Para descifrar un mensaje, ingresa el mensaje cifrado y el mismo número de filas, luego haz clic en "Descifrar".</li>
                </ol>

                <h4>¡Listo para comenzar!</h4>
                <p>
                    Ahora que conoces cómo usar la herramienta, ¡prueba cifrar y descifrar tus mensajes!
                </p>
                <Button label="Volver al Inicio" className="p-button-info" onClick={() => window.location.href = '/'} />
            </Card>
        </div>
    );
};

export default GuiaUso;
