function Jufra({ jufra }) {
    const story = [];
    for (let [i, sentence] of jufra.entries()) {
        i++;
        story.push(
            <div className="sentence" key={i}>
                <span className="kanju">{i}</span>
                <p className="glico">{sentence.glico}</p>
                <p className="fanva">{sentence.fanva}</p>
            </div>
        );
    }
    return (
        <section className="song">
            {story}
        </section>

    );
}

export default Jufra;