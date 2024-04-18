import Project from "../components/Project"
import MarvelImage from "../assets/MarvelQuiz.png"
import BookNDine from "../assets/BookNDine.png"
import NoteTaker from "../assets/NoteTaker.png"
import Weather from "../assets/Weather.png"

function Portfolio() {
    return <main>
        <section className="portfolio page">
            <section className="portfolio-main">
                <Project
                    title="Marvel Quiz"
                    image={MarvelImage}
                    github="https://github.com/Anissa1021/marvel-quiz.git"
                    link="https://anissa1021.github.io/marvel-quiz/"
                />
                <Project 
                    title="Note Taker App" 
                    image={NoteTaker}
                    github="https://github.com/Anissa1021/note-taker.git" 
                    link="https://note-taker-ejs-420ed520ac41.herokuapp.com/"
                />
                <Project 
                    title="Book And Dine PDX" 
                    image={BookNDine}
                    github="https://github.com/mmorrow6109/UofO-GroupProject1.git" 
                    link="https://mmorrow6109.github.io/UofO-GroupProject1/" 
                />
                <Project 
                    title="Weather Dashboard" 
                    image={Weather}
                    github="https://github.com/Anissa1021/weather-dash.git" 
                    link="https://anissa1021.github.io/weather-dash/" 
                />
            </section>
        </section>
    </main>
}

export default Portfolio;