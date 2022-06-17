import "../styles/leo/leo.scss"

const Leo = () => {
    return (
        <section className="main" id="leo">
            <div className="crawl-text-box">
                <div className='crawl-text'>a study in parallax</div>
            </div>
            <div className="parallax">

                <div id="group1" className="parallax__group">
                    <div className="parallax__layer parallax__layer--deep1">
                        <div className="title">Group 1: DEEP1 Layer</div>
                    </div>
                </div>

                <div id="group2" className="parallax__group">
                    <div className="parallax__layer parallax__layer--deep1">
                        <div className="title">Group 2: DEEP1 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep3">
                        <div className="title">Group 2: DEEP3 Layer</div>
                    </div>
                </div>

                <div id="group3" className="parallax__group">
                    <div className="parallax__layer parallax__layer--deep0">
                        <div className="title">Group 3: DEEP0 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep1">
                        <div className="title">Group 3: DEEP1 Layer</div>
                    </div>
                </div>
                <div id="group4" className="parallax__group">
                    <div className="parallax__layer parallax__layer--deep0">
                        <div className="title">Group 4: DEEP0 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep1">
                        <div className="title">Group 4: DEEP1 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep2">
                        <div className="title">Group 4: DEEP2 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep3">
                        <div className="title">Group 4: DEEP3 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep4">
                        <div className="title">Group 4: DEEP4 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep9">
                        <div className="title">Group 4: DEEP9 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep10">
                        <div className="title">Group 4: DEEP10 Layer</div>
                    </div>
                </div>
                <div id="group5" className="parallax__group">
                    <div className="parallax__layer parallax__layer--deep0">
                        <div className="title">Group 5: DEEP0 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep1">
                        <div className="title">Group 5: DEEP1 Layer</div>
                    </div>
                </div>
                <div id="group6" className="parallax__group">
                    <div className="parallax__layer parallax__layer--deep1">
                        <div className="title">Group 6: DEEP1 Layer</div>
                    </div>
                    <div className="parallax__layer parallax__layer--deep3">
                        <div className="title">Group 6: DEEP3 Layer</div>
                    </div>

                </div>
                <div id="group7" className="parallax__group">
                    <div className="parallax__layer parallax__layer--deep1">
                        <div className="title">Group 7: DEEP1 Layer</div>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default Leo;