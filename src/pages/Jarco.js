import "../../src/styles/jarco.scss"

const Jarco = (prop) => {

    const backgroundStyle = {
        backgroundImage: `url('/images/jarco/this-that-these-those-3.gif')`
    };

    return (
        <section id="jarco">
            <div className="simple-square">
                <div className="field" style={backgroundStyle}>
                    <div className="square">

                    </div>

                </div>
                <div className="tree1">🌳</div>
                <div className="tree2">🌲</div>
                <div className="tree3">🌴</div>
                <div className="tree4">🌴</div>
                <div className="tree5">🌲</div>


                <div className="woman1">🧍‍♀️</div>
                <div className="man1">🧍</div>

                <div className="house1">🏨</div>
                <div className="house2">🏚️</div>
                <div className="house3">🏠</div>

                <div className="near this">this</div>
                <div className="near these">these</div>

                <div className="far that">that</div>

                <div className="far those">those</div>


            </div>
        </section>
    );
};
export default Jarco;