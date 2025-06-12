import "../../styles/grm/prenu.scss";

const Prenu = (props) => {
    return (
        <section className="prenu">
            <div className="container">
                <div className="floor p3 skin">
                    <div className="skin room">
                        <div className="skin box">
                            <div className="skin pron">he</div>
                            <div className="skin poss">his</div>
                        </div>

                        <div className="skin box">
                            <div className="skin pron">she</div>
                            <div className="skin poss">he<i>r</i></div>
                        </div>
                        <div className="skin box">
                            <div className="skin pron">it</div>
                            <div className="skin poss">it<i>s</i></div>
                        </div>
                    </div>
                    <div className="skin room box">
                        <div className="skin pron">they</div>
                        <div className="skin poss">thei<i>r</i></div>
                    </div>
                </div>
                <div className="floor p2 skin">
                    <div className="room pron">you</div>
                    <div className="room poss">you<i>r</i></div>
                </div>
                <div className="floor p1 skin">
                    <div className="skin room box">
                        <div className="skin pron">I</div>
                        <div className="skin poss">my</div>
                    </div>
                    <div className="skin room box">
                        <div className="skin pron">we</div>
                        <div className="skin poss">ou<i>r</i></div>
                    </div>
                </div>
            </div>

            <div className="mike">
                <p>👟👟👠👠👟👟👞👞</p>
                <p>I have <i>my</i> shoes.</p>
                <p>You have <i>your</i> shoes.</p>
                <p>He has <i>his</i> shoes.</p>
                <p>She has <i>her</i> shoes.</p>
                <p>It has <i>its</i> shoes.</p>
                <p>We have <i>our</i> shoes.</p>
                <p>They have <i>their</i> shoes.</p>
            </div>

        </section>
    )
};

export default Prenu;