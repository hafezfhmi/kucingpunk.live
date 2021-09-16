import styles from '../styles/About.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

// https://www.react-reveal.com/docs/

function About() {
  return (
    <section className={styles.About + ' ' + utilStyles.margin2TopBot}>
      <Fade bottom>
        <h2 className={utilStyles.headingL}>Meowhat?</h2>
        <h3 className={utilStyles.headingXS + ' ' + utilStyles.marginNeg2Top}>
          *Read: What?
        </h3>
      </Fade>

      <div className={styles.container}>
        <div className={styles.subContainerLeft}>
          <Fade bottom>
            <p>KucingPunk is a collection of NFT.</p>
            <hr className={styles.horizontalShort} />
            <p>Machinely generated with a total of 500 NFT.</p>
            <hr className={styles.horizontalShort} />
            <p>
              Each NFT is uniquely equipped with different traits and ranked by
              their own rarity.
            </p>
            <hr className={styles.horizontalShort} />
            <p>
              All KucingPunk will be minted on pentas.io and a total of 470 NFT
              will be made available for sale.
            </p>
          </Fade>
        </div>

        <div className={styles.subContainerRight}>
          <Image
            src="/images/Cat1.png"
            height="400"
            width="400"
            alt="Picture of a cat"
            placeholder="blur"
            blurDataURL="/images/Placeholder.png"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default About;
