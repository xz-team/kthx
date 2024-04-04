import Image from "next/image";
import styles from "./page.module.css";

import { Countdown } from "./countdown";

export default function Home() {

  return (<main className={styles.main}>
    <div className={styles.description}>
      kthx
      <div className="stars">
        <div>
          <h1 className="title">xz.team</h1>
        </div>
        <div className="upper-text">
          <h3>LAUNCHING SOON :) :) :)</h3>
        </div>

        <div className="footer">
        </div>

      </div>
      <Countdown></Countdown>

    </div>
  </main>
  )
}
