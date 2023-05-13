import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHeight, setUnderlined, setColor } from "../store/headerSlice";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeight(headerRef.current.offsetHeight));
  }, [dispatch]);

  const headerHeight = useSelector((state) => state.header.height);
  let headerColor = useSelector((state) => state.header.color);
  let underlineButton = useSelector((state) => state.header.underlined);

  const aboutSectionPosition = useSelector(
    (state) => state.aboutSection.yAxisPosition
  );
  const contactSectionPosition = useSelector(
    (state) => state.contactSection.yAxisPosition
  );
  const FAQsectionPosition = useSelector(
    (state) => state.FAQsection.yAxisPosition
  );
  const languageCoursesSectionPosition = useSelector(
    (state) => state.languageCoursesSection.yAxisPosition
  );
  const programmingSectionPosition = useSelector(
    (state) => state.programmingSection.yAxisPosition
  );

  const middle = (window.innerHeight - headerHeight) / 2 + headerHeight;
  const location = useLocation().pathname;

  const listenScrollEvent = () => {
    if (location === "/") {
      window.scrollY > 0
        ? dispatch(setColor("var(--navyShadow50)"))
        : dispatch(setColor("transparent"));
    } else {
      dispatch(setColor("var(--navyShadow50)"));
    }

    if (location === "/"){
      if (
        window.scrollY + middle >= 0 &&
        window.scrollY + middle < aboutSectionPosition
      ) {
        dispatch(setUnderlined("home"));
      } else if (
        window.scrollY + middle >= aboutSectionPosition &&
        window.scrollY + middle < languageCoursesSectionPosition
      ) {
        dispatch(setUnderlined("about"));
      } else if (
        window.scrollY + middle >= languageCoursesSectionPosition &&
        window.scrollY + middle < programmingSectionPosition
      ) {
        dispatch(setUnderlined("language"));
      } else if (
        window.scrollY + middle >= programmingSectionPosition &&
        window.scrollY + middle < FAQsectionPosition
      ) {
        dispatch(setUnderlined("programming"));
      } else if (
        window.scrollY + middle >= FAQsectionPosition &&
        window.scrollY + middle < contactSectionPosition
      ) {
        dispatch(setUnderlined("faq"));
      } else if (window.scrollY + middle >= contactSectionPosition) {
        dispatch(setUnderlined("contact"));
      }
    } else if (location.match(/individual-custom-japanese.*/) || location.match(/group-custom-japanese.*/) || location.match(/individual-custom-english.*/) || location.match(/group-custom-english.*/)){
      dispatch(setUnderlined("language"));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const handleLogoClick = () => {
    if(location === "/") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header
      id="header"
      ref={headerRef}
      className={styles.header}
      style={{ background: headerColor }}
    >
      <Link to={"/"} className={styles.Logo}>
        <div onClick={handleLogoClick}>
          <Logo />
        </div>
      </Link>

      <nav className={styles.navbar}>
        <Button
          name="home"
          text="home"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="heroSection"
          link="/"
        />

        <Button
          name="about"
          text="about"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="aboutSection"
          link="/"
        />

        <div className={styles.dropdown}>
          <Button
            name="language"
            text="language courses"
            type="withoutBorder"
            position=""
            underlinedButton={underlineButton}
            transform="capitalizeFirstLetter"
            section="languageCoursesSection"
            link="/"
          />
          <div
            className={styles.dropdownContent}
            style={{ background: headerColor }}
          >
            <Button
              name="japanese"
              text="japanese &nbsp; &nbsp; &nbsp; &nbsp; (in English)"
              type="withoutBorder"
              position=""
              underlinedButton=""
              transform="capitalizeFirstLetter"
              section="engSubsection"
              link="/"
            />
            <Button
              name="english"
              text="english &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (in Japanese)"
              type="withoutBorder"
              position=""
              underlinedButton=""
              transform="capitalizeFirstLetter"
              section="jpSubsection"
              link="/"
            />
            <Button
              name="japanese"
              text="japanese &nbsp; &nbsp; &nbsp; &nbsp; (in Romanian)"
              type="withoutBorder"
              position=""
              underlinedButton=""
              transform="capitalizeFirstLetter"
              section="roSubsection"
              link="/"
            />
          </div>
        </div>

        <Button
          name="programming"
          text="programming"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="programmingSection"
          link="/"
        ></Button>

        <Button
          name="faq"
          text="faq"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="uppercase"
          section="FAQsection"
          link="/"
        ></Button>

        <Button
          name="contact"
          text="contact"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="contactSection"
          link="/"
        ></Button>
      </nav>
    </header>
  );
}
