import "../../styles/grm/prenu.scss";

const Prenu = (props) => {
    return (
        <section id="prenu">

            <div className="container">

                <div className="floor p3 skin">
                    <div className="skin room">
                        <div className="skin box">
                            <div className="skin pron">he</div>
                            <div className="skin poss"><b className="orig">h</b>is</div>
                        </div>

                        <div className="skin box">
                            <div className="skin pron">she</div>
                            <div className="skin poss">h<b className="orig">e</b><i>r</i></div>
                        </div>
                        <div className="skin box">
                            <div className="skin pron">it</div>
                            <div className="skin poss"><b className="orig">it</b><i>s</i></div>
                        </div>
                    </div>
                    <div className="skin room box">
                        <div className="skin pron">they</div>
                        <div className="skin poss"><b className="orig">the</b>i<i>r</i></div>
                    </div>
                </div>
                <div className="floor p2 skin">
                    <div className="room pron">you</div>
                    <div className="room poss"><b className="orig">you</b><i>r</i></div>
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


            <div className="container">
                <div className="floor p3 skin">
                    <div className="skin room">
                        <div className="skin box">
                            <div className="skin pron">he</div>
                            <div className="skin obj"><b className="orig">h</b>im</div>
                        </div>

                        <div className="skin box">
                            <div className="skin pron">she</div>
                            <div className="skin obj">h<b className="orig">e</b><i>r</i></div>
                        </div>
                        <div className="skin box">
                            <div className="skin pron">it</div>
                            <div className="skin obj"><b className="orig">it</b></div>
                        </div>
                    </div>
                    <div className="skin room box">
                        <div className="skin pron">they</div>
                        <div className="skin obj"><b className="orig">the</b>m</div>
                    </div>
                </div>
                <div className="floor p2 skin">
                    <div className="room pron">you</div>
                    <div className="room obj"><b className="orig">you</b></div>
                </div>
                <div className="floor p1 skin">
                    <div className="skin room box">
                        <div className="skin pron">I</div>
                        <div className="skin obj">me</div>
                    </div>
                    <div className="skin room box">
                        <div className="skin pron">we</div>
                        <div className="skin obj">us</div>
                    </div>
                </div>
            </div>

            <div className="henry">

                <div className="mike">
                    <p>...</p>
                    <p>I work with <i>him</i>.</p>
                    <p>You work with  <i>them</i>.</p>
                    <p>He works with  <i>me</i>.</p>
                    <p>She works with  <i>us</i>.</p>
                    <p>It works with  <i>her</i>.</p>
                    <p>We work with  <i>you</i>.</p>
                    <p>They work with  <i>it</i>.</p>
                </div>

                <div className="mike">
                    <p>👁️👁️👓👀🤓</p>
                    <p>I see <i>him</i>.</p>
                    <p>You see <i>them</i>.</p>
                    <p>He sees <i>me</i>.</p>
                    <p>She sees <i>us</i>.</p>
                    <p>It sees <i>her</i>.</p>
                    <p>We see <i>you</i>.</p>
                    <p>They see <i>it</i>.</p>
                </div>

                <div className="mike">
                    <p>🗣️🔊🎤</p>
                    <p>I talk with <i>him</i>.</p>
                    <p>You talk with  <i>them</i>.</p>
                    <p>He talks with  <i>me</i>.</p>
                    <p>She talks with  <i>us</i>.</p>
                    <p>It talks with  <i>her</i>.</p>
                    <p>We talk with  <i>you</i>.</p>
                    <p>They talk with  <i>it</i>.</p>
                </div>
            </div>

        </section>
    )
};

export default Prenu;