import React from "react";
import styles from "./CardsSubsection.module.css"
import Subtitle from "../title/Subtitle";
import CardsGrid from "../Cards/CardsGrid";
import { languageCoursesCardsData__English } from "../../helpers/data/languageCoursesCards/EnglishLanguageCourses";
import { languageCoursesCardsData__Japanese} from "../../helpers/data/languageCoursesCards/JapaneseLanguageCourses";
import { languageCoursesCardsData__Romanian} from "../../helpers/data/languageCoursesCards/RomanianLanguageCourses";

export default function CardsSubsection(props) {
    const id = props.id;
    let cards = "";
    let subtitleText = "";

    if(id === "CardsSubsectionEnglish"){
        cards = languageCoursesCardsData__English();
        subtitleText = "Courses taught in English:";
    } else if(id === "CardsSubsectionJapanese"){
        cards = languageCoursesCardsData__Japanese();
        subtitleText = "Courses taught in Japanese:";
    } else if(id === "CardsSubsectionRomanian"){
        cards = languageCoursesCardsData__Romanian();
        subtitleText = "Courses taught in Romanian:";
    };

    const greyed = cards.greyed;



    return (
        <div className={styles.CardsSubsection} id={id}>

            <div className={styles.subtitle}>
                <Subtitle text={subtitleText}/>
            </div>

            <CardsGrid cards={cards} id={id} greyed={greyed} />

        </div>
    )
}
