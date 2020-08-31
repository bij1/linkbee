import React from "react"
import Link from "./link.js"
import styles from "./page.module.css"

const Page = ({ user, links }) =>
  <>
    <img className={styles.userAvatar} src={user.avatar} alt="user avatar" />
    <a href={user.link} className={styles.userName}>{user.name}</a>
    <div className={styles.links}>
      {links.map(({ text, url }) => <Link text={text} url={url} />)}
    </div>
  </>

export default Page
