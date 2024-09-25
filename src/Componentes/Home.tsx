import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import '../Estilos/Home.css'; // Asegúrate de tener un archivo CSS para estilos personalizados
import cifradoImage from '../img/cifradoImage.png'; 


const Home = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
          
            <span className="font-bold">Guía de Uso</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Cerrar" icon="pi pi-times" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (
        <div className="home-container p-d-flex p-flex-column p-ai-center p-jc-center" style={{ minHeight: '100vh', backgroundColor: '#f7f7f7', padding: '2rem' }}>
            <Card className="p-mb-4" title="¡Bienvenido a la App de Cifrados!" style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
            <div className="image-container p-mb-4">
    <img src={cifradoImage} alt="Cifrado" className="p-mb-3" />
</div>

                <p>
                    Esta aplicación te permitirá aprender y experimentar con diferentes métodos de cifrado,
                    incluyendo el <strong>Cifrado César</strong> y el <strong>Cifrado Escítala</strong>. 
                    Explora los menús para aprender más sobre cada tipo de cifrado y ¡prueba cifrar y descifrar tus propios mensajes!
                </p>
                <Button
                    label="Mostrar Guía de Uso"
                    icon="pi pi-question-circle"
                    className="p-button-raised p-button-info p-mt-3"
                    onClick={() => setVisible(true)}
                />
            </Card>
            
            <Dialog 
                visible={visible} 
                modal 
                header={headerElement} 
                footer={footerContent} 
                style={{ width: '50rem' }} 
                onHide={() => setVisible(false)}
            >
                <div className="p-fluid">
                    <h3>Bienvenido a la herramienta de cifrado</h3>
                    <Divider />
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
                </div>
            </Dialog>
        </div>
    );
}

export default Home;
