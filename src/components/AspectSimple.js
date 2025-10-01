import "../styles/grm/aspect.scss";

const AspectSimple = () => {
    return (
        <section className="aspect simple">
            <h1>Aspect Simple</h1>
            <div className="plural">
                <div className="line">
                    <b className="main pron plur">we</b>&nbsp;<b className="main verb">work</b>
                </div>
                <div className="line">
                    <b className="aux">do</b>&nbsp;<b className="main pron plur">we</b>&nbsp;<b className="main verb">work</b>?
                </div>
                <div className="line">
                    <b className="main pron plur">we</b>&nbsp;<b className="aux">do</b>&nbsp;<b className="not">not</b>&nbsp;<b className="main verb">work</b>
                </div>
            </div>
            <div className="singular">
                <div className="line">
                    <b className="main pron sing">she</b>&nbsp;<b className="main verb">work</b><b className="sfx es">s</b>
                </div>
                <div className="line">
                    <b className="aux">do</b><b className="sfx es">es</b>&nbsp;<b className="main pron sing">she</b>&nbsp;<b className="main verb">work</b>?
                </div>
                <div className="line">
                    <b className="main pron sing">she</b>&nbsp;<b className="aux">do</b><b className="sfx es">es</b>&nbsp;<b className="not">not</b>&nbsp;<b className="main verb">work</b>?
                </div>
            </div>
        </section>
    );
}

export default AspectSimple;