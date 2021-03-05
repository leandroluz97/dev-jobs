import React from "react"
import styles from "./Infos.module.css"

const Infos = () => {
  return (
    <div className={styles.infos}>
      <div className={styles.infosHead}>
        <div>
          <p>1w ago &bull; Part Time</p>
          <p>Senior Software Engineer</p>
          <p>Toronto, Ontario - Remote</p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
      <p className={styles.infosCopy}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus
        quasi aperiam sed accusamus nihil, obcaecati minima voluptatum
        voluptatibus cupiditate id iure necessitatibus natus atque perspiciatis
        omnis in, nulla, at ducimus cum aspernatur enim quisquam. Repellendus
        quos ex sunt. Repellendus maxime facere, animi cumque perspiciatis illo
        iusto fugit iure officiis voluptatibus illum velit laudantium quam
        debitis adipisci nostrum tenetur! Deserunt repudiandae optio magnam
        similique ratione voluptate eum ad, saepe qui aperiam mollitia fugit
        corrupti unde beatae quo porro sapiente a dolor possimus velit autem
        ipsum, corporis provident recusandae. Laboriosam nemo molestias
        voluptatem eos accusantium suscipit consectetur! Delectus exercitationem
        quos mollitia.
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
        vitae sapiente, optio quam maxime laudantium inventore debitis assumenda
        reprehenderit non provident repellendus vel earum, cumque ipsam
        asperiores veritatis corporis perferendis.
      </p>
    </div>
  )
}

export default Infos
