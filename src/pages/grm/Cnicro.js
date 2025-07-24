import { React, useState } from "react";
import "../../styles/grm/cnicro.scss";

const Cnicro = (props) => {

    const [index, setIndex] = useState(0);

    const here = ["hɪr", "here", "хир"];
    const igh = ["aɪ", "I", "ай"];
    const hesheit = ["hi ʃi ɪt", "he she it", "hи щи ɪт"];
    const weyouthey = ["wi ju ðeɪ", "we you they", "ўи ю ðэй"];

    const am = ["æm", "am", "æм"];
    const ams = ["m", "'m", "м"];
    const is = ["ɪz", "is", "ɪз"];
    const iss = ["z s", "'s", "з с"];
    const are = ["ɑr", "are", "ɑр"];
    const ares = ["r", "'re", "р"];

    const be = ["bi", "BE", "БИ"];
    const not = ["nɑt", "not", "нɑт"];
    const nots = ["nt", "n't", "нт"];

    return (
        <section className="cnicro">
            <div className="kimbo">
                <button onClick={() => setIndex((index + 1) % 3)}>Next</button>
            </div>

            <div className="jimbo">
                <div className="sncBlock">

                    <h1>#1</h1>
                    <div className="snc positive">
                        <div className="word pron _1ps">{igh[index]}</div>
                        <div className="word verb _1ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{am[index]}</div>
                            <div className="baseForm">{be[index]}
                            </div>
                        </div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc positive">
                        <div className="word pron _1ps">{igh[index]}</div>
                        <div className="word verb _1ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{ams[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word">{here[index]}</div>

                    </div>

                    <div className="snc negative">
                        <div className="word pron _1ps">{igh[index]}</div>
                        <div className="word verb _1ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{am[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word adv not">{not[index]}</div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _1ps">{igh[index]}</div>
                        <div className="word verb _1ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{ams[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word adv not">{not[index]}</div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc question">
                        <div className="word verb _1ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{am[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word pron _1ps">{igh[index]}</div>
                        <div className="word">{here[index]}</div>
                        <div className="punctuation">?</div>

                    </div>

                </div>

                <div className="sncBlock">
                    <h1>#2</h1>

                    <div className="snc positive">
                        <div className="word pron _3ps">{hesheit[index]}</div>
                        <div className="word verb _3ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{is[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word">
                            <div className="word">{here[index]}</div>
                        </div>
                    </div>

                    <div className="snc positive">
                        <div className="word pron _3ps">{hesheit[index]}</div>
                        <div className="word verb _3ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{iss[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _3ps">{hesheit[index]}</div>
                        <div className="word verb _3ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{is[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word adv not">{not[index]}</div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _3ps">{hesheit[index]}</div>
                        <div className="word verb _3ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{iss[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word adv not">{not[index]}</div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _3ps">{hesheit[index]}</div>
                        <div className="word verb _3ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{is[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word adv not">{nots[index]}</div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc question">
                        <div className="word verb _3ps be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{is[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word pron _3ps">{hesheit[index]}</div>
                        <div className="word">{here[index]}</div>
                        <div className="punctuation">?</div>
                    </div>
                </div>

                <div className="sncBlock">

                    <h1>#3</h1>
                    <div className="snc positive">
                        <div className="word pron _pl">{weyouthey[index]}</div>
                        <div className="word verb _pl be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{are[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc positive">
                        <div className="word pron _pl">{weyouthey[index]}</div>
                        <div className="word verb _pl be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{ares[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _pl">{weyouthey[index]}</div>
                        <div className="word verb _pl be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{are[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word adv not">{not[index]}</div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _pl">{weyouthey[index]}</div>
                        <div className="word verb _pl be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{ares[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word adv not">{not[index]}</div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc negative">
                        <div className="word pron _pl">{weyouthey[index]}</div>
                        <div className="word verb _pl be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{are[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word adv not">{nots[index]}</div>
                        <div className="word">{here[index]}</div>
                    </div>

                    <div className="snc question">
                        <div className="word verb _pl be">
                            <div className="emoji">🐝</div>
                            <div className="avatar">{are[index]}</div>
                            <div className="baseForm">{be[index]}</div>
                        </div>
                        <div className="word pron _pl">{weyouthey[index]}</div>
                        <div className="word">{here[index]}</div>
                        <div className="punctuation">?</div>
                    </div>
                </div>
            </div>

        </section >


    )
};

export default Cnicro;