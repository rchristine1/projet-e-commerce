import React from 'react';
export default function EFooter(props) {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: 'lightgrey' }}>
            <div className='p-4 pb-0'>
                <section className=''>
                    <p className='d-flex justify-content-center align-items-center'>
                        <span className='me-3'>Enregistrez-vous gratuitement</span>
                        <button type='button' className='btn btn-outline-light btn-rounded' onClick={event => props.setCurrentPage({ "register": "null" })}>
                            Inscrivez-vous!
                        </button>
                    </p>
                </section>
            </div>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Pour nous contacter
                <a href="#" className="text-decoration-none"
                    onClick={event => props.setCurrentPage({ "contact": "null" })}> Contact</a>
            </div>
        </footer>
    )
}