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

const Socials = ({socialmedia}) => (
    <main
        style={{
            maxWidth: '608px',
            margin: '0 auto',
        }}
    >
        <div className={styles.container}>
            <a href={socialmedia.facebook} target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
            <a href={socialmedia.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href={socialmedia.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href={socialmedia.youtube} target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
            <a href={socialmedia.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
        </div>
    </main>
)

export default Socials