import certifications from '@/data/certifications'
import React from 'react'
import { Image } from 'react-bootstrap'

const CertificationsSection = () => {
    return (
        <section className="clients">
            <h3 className="h3 clients-title">Certifications</h3>

            <ul className="clients-list has-scrollbar">
                {certifications.map((certification, index) => (<li key={index} className="clients-item">
                    <a href={certification.link} className='text-center'>
                        <Image src={certification.image} alt={certification.name} />
                    </a>
                    <h4 className="h4 text-center notranslate" data-testimonials-title>
                        {certification.name}
                    </h4>
                    {/* <div className="certification-description text-center" data-testimonials-text>
                        <p>{certification.description}</p>
                    </div> */}
                </li>))}
            </ul>
        </section>
    )
}

export default CertificationsSection
