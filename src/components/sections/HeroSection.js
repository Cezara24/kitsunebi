import React from "react";
import styles from "./HeroSection.module.css";
import Button from "../Button"
import coverImageLeft from "../../images/coverLeft.png"
import coverImageRight from "../../images/coverRight.png"

let timer = 0;

export default function HeroSection() {
  window.addEventListener('resize', function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      this.document.getElementById("halfBackgroundLeft").style.transition = "none"
      this.document.getElementById("halfBackgroundRight").style.transition = "none"
      this.document.getElementById("coverContentContainerLeft").style.transition = "none"
      this.document.getElementById("coverContentContainerRight").style.transition = "none"
    }
    timer = setTimeout(() => {
      this.document.getElementById("halfBackgroundLeft").style.transition = "all .2s linear"
      this.document.getElementById("halfBackgroundRight").style.transition = "all .2s linear"
      this.document.getElementById("coverContentContainerLeft").style.transition = "all .2s linear"
      this.document.getElementById("coverContentContainerRight").style.transition = "all .2s linear"
      timer = null;
    }, 100);
  })

  return (
    <section id="heroSection" className={styles.heroSection}>
      <div
        className={styles.cover}
        onMouseLeave={() => {
          document.getElementById("titleLeft").innerHTML = "Language Courses"
          document.getElementById("titleRight").innerHTML = "Programming Courses"
          document.getElementById("halfBackgroundLeft").style.width = "60vw"
          document.getElementById("halfBackgroundRight").style.width = "60vw"
          document.getElementById("halfBackgroundLeft").style.clipPath = "polygon(0% 0%, 0% 100%, 66.6% 100%, 100% 0%)"
          document.getElementById("halfBackgroundRight").style.clipPath = "polygon(33.4% 0%, 0% 100%, 100% 100%, 100% 0%)"
          document.getElementById("coverContentContainerLeft").style.width = "40vw"
          document.getElementById("coverContentContainerRight").style.width = "40vw"
        }}
      >
        
        <div 
          id="halfBackgroundLeft" 
          className={`${styles.halfBackground} ${styles.halfBackground__left}`}
          onMouseEnter={() => {
            document.getElementById("descriptionRight").style.display = "none"
            document.getElementById("titleRight").innerHTML = "Programming<br>Courses"
            document.getElementById("titleLeft").innerHTML = "Language<br>Courses"
            document.getElementById("halfBackgroundLeft").style.width = "70vw"
            document.getElementById("halfBackgroundRight").style.width = "50vw"
            document.getElementById("halfBackgroundLeft").style.clipPath = "polygon(0% 0%, 0% 100%, 71.42% 100%, 100% 0%)"
            document.getElementById("halfBackgroundRight").style.clipPath = "polygon(40% 0%, 0% 100%, 100% 100%, 100% 0%)"
            document.getElementById("coverContentContainerLeft").style.width = "50vw"
            document.getElementById("coverContentContainerRight").style.width = "30vw"
            document.getElementById("descriptionLeft").style.display = "flex"
            document.getElementById("descriptionLeft").style.color = "transparent"
            document.getElementById("descriptionLeft").style.width = "0"
            setTimeout(() => {
              document.getElementById("descriptionLeft").style.width = "30vw"
            }, 0)
            setTimeout(() => {
              document.getElementById("descriptionLeft").style.color = "aliceblue"
            }, 200)
          }}
          onMouseLeave={() => {
            document.getElementById("descriptionLeft").style.display = "none"
          }}
        >
          <div id="coverContentContainerLeft" className={styles.coverContentContainer}>
            <div className={styles.coverText}>
              <div className={styles.titleImageCategoriesContainer}>
                <img src={coverImageLeft} className={`${styles.coverImage} ${styles.coverImageLeft}`}></img>
                <div id="titleLeft" className={styles.title}>Language Courses</div>
                <Button name="" text="Find out more" type="empty" position="left"></Button>
              </div>
              <ul id="descriptionLeft" className={styles.description}>
                <li>courses available for Japanese and English languages</li>
                <li>interactive learning activities</li>
                <li>structured curriculum</li>
                <li>taught by experienced instructor</li>
                <li>opportunities for one-on-one tutoring</li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          id="halfBackgroundRight"
          className={`${styles.halfBackground} ${styles.halfBackground__right}`}
          onMouseEnter={() => {
            document.getElementById("descriptionLeft").style.display = "none"
            document.getElementById("titleLeft").innerHTML = "Language<br>Courses"
            document.getElementById("titleRight").innerHTML = "Programming<br>Courses"
            document.getElementById("halfBackgroundLeft").style.width = "50vw"
            document.getElementById("halfBackgroundRight").style.width = "70vw"
            document.getElementById("halfBackgroundLeft").style.clipPath = "polygon(0% 0%, 0% 100%, 60% 100%, 100% 0%)"
            document.getElementById("halfBackgroundRight").style.clipPath = "polygon(28.57% 0%, 0% 100%, 100% 100%, 100% 0%)"
            document.getElementById("coverContentContainerLeft").style.width = "30vw"
            document.getElementById("coverContentContainerRight").style.width = "50vw"
            document.getElementById("descriptionRight").style.display = "flex"
            document.getElementById("descriptionRight").style.color = "transparent"
            document.getElementById("descriptionRight").style.width = "0"
            setTimeout(() => {
              document.getElementById("descriptionRight").style.width = "30vw"
            }, 0)
            setTimeout(() => {
              document.getElementById("descriptionRight").style.color = "aliceblue"
            }, 200)
            
          }}

          onMouseLeave={() => {
            document.getElementById("descriptionRight").style.display = "none"
          }}
        >
          <div id="coverContentContainerRight" className={`${styles.coverContentContainer} ${styles.coverContentContainer__right}`}>
            <div className={styles.coverText}>
              <ul id="descriptionRight" className={styles.description}>
                <li>latest HTML and CSS standards and modern JavaScript</li>
                <li>hands-on learning</li>
                <li>real-world projects</li>
                <li>structured curriculum</li>
                <li>support and feedback</li>
              </ul>
              <div className={styles.titleImageCategoriesContainer}>
                <img src={coverImageRight} className={`${styles.coverImage} ${styles.coverImageRight}`}></img>
                <div id="titleRight" className={styles.title}>Programming Courses</div>
                <Button name="" text="Find out more" type="empty" position="right"></Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
