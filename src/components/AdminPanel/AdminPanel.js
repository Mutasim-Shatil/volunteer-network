import React from 'react'
import logo from '../../logos/navbar-logo.png'
import AddEvent from './AddEvent'
import "./AdminPanel.css"

const AdminPanel = () => {
    return (
        <>
        <div className="admin">
            <div className="admin__header">
                <img src={logo} alt=""/>
                <h3>Volunteer register list</h3>
            </div>
            <div className="admin__left">
                <p className="admin__btn">Volunteer register list</p>
                <p className="admin__btn">+ Add event</p>
            </div>
            <div className="admin__right"></div>
        </div>
        <AddEvent />
        </>
    )
}

export default AdminPanel
