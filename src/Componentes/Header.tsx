import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Link } from 'react-router-dom';

const HeaderCifrado = () => {
    const items: MenuItem[] = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            template: () => (
                <Link to="/" className="p-menuitem-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <i className="pi pi-home" style={{ marginRight: '0.5rem' }}></i> Inicio
                </Link>
            )
        },
        {
            label: 'Cifrados',
            icon: 'pi pi-lock',
            items: [
                {
                    label: 'Cifrado César',
                    icon: 'pi pi-shield',
                    template: () => (
                        <Link to="/cesar" className="p-menuitem-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <i className="pi pi-shield" style={{ marginRight: '0.5rem' }}></i> Cifrado César
                        </Link>
                    )
                },
                {
                    label: 'Cifrado Escítala',
                    icon: 'pi pi-key',
                    template: () => (
                        <Link to="/escitala" className="p-menuitem-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <i className="pi pi-key" style={{ marginRight: '0.5rem' }}></i> Cifrado Escítala
                        </Link>
                    )
                }
            ]
        },
        {
            label: 'Guía',
            icon: 'pi pi-book',
            template: () => (
                <Link to="/guia" className="p-menuitem-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <i className="pi pi-book" style={{ marginRight: '0.5rem' }}></i> Guía
                </Link>
            )
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    );
};

export default HeaderCifrado;
