import "../../../src/styles/grm/asti.scss"

const Asti = (prop) => {
    return (
        <section id="asti">

            <h1>The existential <b className="there">there</b></h1>
            <div>
                <div className="line">
                    <b className="group"><b className="there">There</b> <b className="be">is</b></b>
                    <b className="sing">an object</b>
                    there.
                </div>
                <div className="line">
                    <b className="group">
                        <b className="there">There</b> <b className="be">is</b></b> <b className="not">not</b>
                    <b className="sing">an object</b> there.
                </div>
                <div className="line">
                    <b className="group">
                        <b className="be">Is</b> <b className="there">There</b>
                    </b>
                    <b className="sing">an object</b> there<b className="que">?</b>
                </div>
                <div className="line">Yes,
                    <b className="group"><b className="there">There</b> <b className="be">is</b></b>.
                </div>
                <div className="line">No,
                    <b className="group">
                        <b className="there">There</b> <b className="be">is</b>
                    </b>
                    <b className="not">not</b>.
                </div>

                <div className="line">
                    <b className="group">
                        <b className="there">There</b> <b className="be">are</b>
                    </b>
                    10 <b className="plur">objects</b> there.
                </div>
                <div className="line">
                    <b className="group"><b className="there">There</b> <b className="be">are</b> </b><b className="some">some</b>
                    <b className="plur">objects</b> there.
                </div>

                <div className="line">
                    <b className="group">
                        <b className="there">There</b> <b className="be">are</b></b>
                    <b className="not">not</b> <b className="any">any</b>
                    <b className="plur">objects</b> there.
                </div>
                <div className="line">
                    <b className="group">
                        <b className="be">Are</b> <b className="there">There</b>
                    </b>
                    <b className="any">any</b>
                    <b className="plur">objects</b> there<b className="que">?</b></div>
                <div className="line">Yes,
                    <b className="group"><b className="there">There</b> <b className="be">are</b>
                    </b>.
                </div>
                <div className="line">No,
                    <b className="group"><b className="there">There</b> <b className="be">are</b>
                    </b>
                    <b className="not">not</b>.
                </div>

            </div>
        </section >
    );

};
export default Asti;