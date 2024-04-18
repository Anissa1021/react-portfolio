function Project(props) {
    return <section className="project">
        <a href={props.link} target="_blank">
        <img src={props.image}></img>
        <section className="info">
            <h3>{props.title}</h3>
            <a href={props.github}>GitHub</a>
        </section>
        </a>
    </section>
}

export default Project;