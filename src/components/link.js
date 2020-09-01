import React from "react"
import styles from "./link.module.scss"

export default function Link({ url, text }) {
    return <a href={url} className={styles.link}>{text}</a>
}
