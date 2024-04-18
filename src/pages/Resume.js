import resumefile from '../files/Resume.pdf';

function Resume() {
    return <main>
        <section className="resume page">
            <h2 className="title">Resume</h2>
            <a download href={resumefile}>Download Resume</a>
        </section>
    </main>
}

export default Resume;