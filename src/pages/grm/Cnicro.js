import { React, useState } from "react";
import "../../styles/grm/cnicro.scss";

const Cnicro = (props) => {
    const [showIPA, setShowIPA] = useState(true);

    return (
        <section className="cnicro">
            <div className="kimbo">
                <button onClick={() => setShowIPA(!showIPA)}>
                    {showIPA ? "ABC" : "IPA"}
                </button>
            </div>

            <div className="jimbo">
                <div className="sncBlock">

                    <h1>#1</h1>
                    <div className="snc positive">
                        <div className="word pron _1ps">{showIPA ? `aɪ` : `I`}</div>
                        <div className="word verb _1ps be">
                            <div className="avatar">{showIPA ? `æm` : `am`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc positive">
                        <div className="word pron _1ps">{showIPA ? `aɪ` : `I`}</div>
                        <div className="word verb _1ps be">
                            <div className="avatar">{showIPA ? `m` : `'m`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>

                    </div>

                    <div className="snc negative">
                        <div className="word pron _1ps">{showIPA ? `aɪ` : `I`}</div>
                        <div className="word verb _1ps be">
                            <div className="avatar">{showIPA ? `æm` : `am`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word adv not">{showIPA ? `nɑt` : `not`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _1ps">{showIPA ? `aɪ` : `I`}</div>
                        <div className="word verb _1ps be">
                            <div className="avatar">{showIPA ? `m` : `m`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word adv not">{showIPA ? `nɑt` : `not`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>


                    <div className="snc question">
                        <div className="word verb _1ps be">
                            <div className="avatar">{showIPA ? `æm` : `am`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word pron _1ps">{showIPA ? `aɪ` : `I`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                        <div className="punctuation">?</div>

                    </div>
                </div>

                <div className="sncBlock">
                    <h1>#2</h1>

                    <div className="snc positive">
                        <div className="word pron _3ps">{showIPA ? `hi ʃi ɪt` : `he she it`}</div>
                        <div className="word verb _3ps be">
                            <div className="avatar">{showIPA ? `ɪz` : `is`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word"><div className="word">{showIPA ? `hɪr` : `here`}</div></div>
                    </div>

                    <div className="snc positive">
                        <div className="word pron _3ps">{showIPA ? `hi ʃi ɪt` : `he she it`}</div>
                        <div className="word verb _3ps be">
                            <div className="avatar">{showIPA ? `z` : ``}</div>
                            <div className="avatar">{showIPA ? `s` : `'s`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _3ps">{showIPA ? `hi ʃi ɪt` : `he she it`}</div>
                        <div className="word verb _3ps be">
                            <div className="avatar">{showIPA ? `ɪz` : `is`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word adv not">{showIPA ? `nɑt` : `not`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _3ps">{showIPA ? `hi ʃi ɪt` : `he she it`}</div>
                        <div className="word verb _3ps be">
                            <div className="avatar">{showIPA ? `z` : ``}</div>
                            <div className="avatar">{showIPA ? `s` : `'s`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word adv not">{showIPA ? `nɑt` : `not`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _3ps">{showIPA ? `hi ʃi ɪt` : `he she it`}</div>
                        <div className="word verb _3ps be">
                            <div className="avatar">{showIPA ? `ɪz` : `is`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word adv not">{showIPA ? `nt` : `n't`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc question">
                        <div className="word verb _3ps be">
                            <div className="avatar">{showIPA ? `ɪz` : `is`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word pron _3ps">{showIPA ? `hi ʃi ɪt` : `he she it`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                        <div className="punctuation">?</div>
                    </div>
                </div>

                <div className="sncBlock">

                    <h1>#3</h1>
                    <div className="snc positive">
                        <div className="word pron _pl">{showIPA ? `wi ju ðeɪ` : `we you they`}</div>
                        <div className="word verb _pl be">
                            <div className="avatar">{showIPA ? `ɑr` : `are`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc positive">
                        <div className="word pron _pl">{showIPA ? `wi ju ðeɪ` : `we you they`}</div>
                        <div className="word verb _pl be">
                            <div className="avatar">{showIPA ? `r` : `'re`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _pl">{showIPA ? `wi ju ðeɪ` : `we you they`}</div>
                        <div className="word verb _pl be">
                            <div className="avatar">{showIPA ? `ɑr` : `are`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word adv not">{showIPA ? `nɑt` : `not`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _pl">{showIPA ? `wi ju ðeɪ` : `we you they`}</div>
                        <div className="word verb _pl be">
                            <div className="avatar">{showIPA ? `r` : `'re`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word adv not">{showIPA ? `nɑt` : `not`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _pl">{showIPA ? `wi ju ðeɪ` : `we you they`}</div>
                        <div className="word verb _pl be">
                            <div className="avatar">{showIPA ? `ɑr` : `are`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word adv not">{showIPA ? `nt` : `n't`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                    </div>

                    <div className="snc question">
                        <div className="word verb _pl be">
                            <div className="avatar">{showIPA ? `ɑr` : `are`}</div>
                            <div className="baseForm">{showIPA ? `bi` : `BE`}</div>
                        </div>
                        <div className="word pron _pl">{showIPA ? `wi ju ðeɪ` : `we you they`}</div>
                        <div className="word">{showIPA ? `hɪr` : `here`}</div>
                        <div className="punctuation">?</div>
                    </div>
                </div>
            </div>

        </section >


    )
};

export default Cnicro;