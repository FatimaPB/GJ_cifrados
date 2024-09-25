import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

const HeaderCifrado = () => {
    const items: MenuItem[] = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            command: () => { window.location.href = "/" }
        },
        {
            label: 'Cifrados',
            icon: 'pi pi-lock',
            items: [
                {
                    label: 'Cifrado César',
                    icon: 'pi pi-shield',
                    command: () => { window.location.href = "/cesar" }
                },
                {
                    label: 'Cifrado Escítala',
                    icon: 'pi pi-key',
                    command: () => { window.location.href = "/escitala" }
                }
            ]
        },
        {
            label: 'Guía',
            icon: 'pi pi-book',
            command: () => { window.location.href = "/guia" }
        },
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    );
};

export default HeaderCifrado;
