import "../styles/grm/aspect.scss";

const AspectContinuous = () => {
    return (
        <section className="aspect continuous">
            <h1>Aspect Continuous</h1>
            <div className="plural">
                <div className="line">
                    <b className="main pron plur">we</b>&nbsp;<b className="aux">are</b>&nbsp;<b className="main verb">work</b><b className="sfx ing">ing</b>
                </div>
                <div className="line">
                    <b className="aux">are</b>&nbsp;<b className="main pron plur">we</b>&nbsp;<b className="main verb">work</b><b className="sfx ing">ing</b>?
                </div>
                <div className="line">
                    <b className="main pron plur">we</b>&nbsp;<b className="aux">are</b>&nbsp;<b className="not">not</b>&nbsp;<b className="main verb">work</b><b className="sfx ing">ing</b>
                </div>
            </div>
            <div className="singular">
                <div className="line">
                    <b className="main pron sing">she</b>&nbsp;<b className="aux">is</b>&nbsp;<b className="main verb">work</b><b className="sfx ing">ing</b>
                </div>
                <div className="line">
                    <b className="aux">is</b>&nbsp;<b className="main pron sing">she</b>&nbsp;<b className="main verb">work</b><b className="sfx ing">ing</b>?
                </div>
                <div className="line">
                    <b className="main pron sing">she</b>&nbsp;<b className="aux">is</b>&nbsp;<b className="not">not</b>&nbsp;<b className="main verb">work</b><b className="sfx ing">ing</b>
                </div>
            </div>


        </section>
    );
}

export default AspectContinuous;