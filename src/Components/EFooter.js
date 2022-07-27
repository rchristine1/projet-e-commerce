import React from 'react';
import { NavLink } from 'react-router-dom'
export default function EFooter(props) {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: 'lightgrey' }}>

            <div className='p-4 pb-0'>
                <section className=''>
                    <p className='d-flex justify-content-center align-items-center'>
                        <span className='me-3'>Enregistrez-vous gratuitement</span>
                        <NavLink to="/register">
                            <button type='button' className='btn btn-outline-light btn-rounded' onClick={event => { props.setCurrentPage({ "register": "null" }) }} >

                                Inscrivez-vous!
                            </button>
                        </NavLink>

                    </p>
                </section>
            </div>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Pour nous contacter
                {/* <a href="#" className="text-decoration-none"
                    onClick={event => props.setCurrentPage({ "contact": "null" })}> Contact</a> */}
                <NavLink to="/contact" className="text-decoration-none" onClick={event => props.setCurrentPage({ "contact": "null" })}> Contact</NavLink>

            </div>

        </footer >
    )
}