import React from "react"
import styles from "./socials.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

const Socials = () => (
    <main
        style={{
            maxWidth: '608px',
            margin: '0 auto',
        }}
    >
        <div className={styles.container}>
            <a href="https://facebook.com/www.bij1.org" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
            <a href="https://twitter.com/politiekbij1" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href="https://instagram.com/politiek_bij1" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
            <a href="https://linkedin.com/company/BIJ1" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
        </div>
    </main>
)

export default Socials