import { React, useState } from "react";
import "../../styles/grm/cnicro.scss";

const Cnicro = (props) => {

    const [index, setIndex] = useState(0);

    const here = ["here", "hɪr", "хир"];
    const igh = ["I", "aɪ", "ай"];
    const hesheit = ["he she it", "hi ʃi ɪt", "hи щи ɪт"];
    const weyouthey = ["we you they", "wi ju ðeɪ", "wи ю ðэй"];

    const am = ["am", "æm", "æм"];
    const ams = ["'m", "m", "м"];
    const is = ["is", "ɪz", "ɪз"];
    const iss = ["'s", "z s", "з с"];
    const are = ["are", "ɑr", "ɑр"];
    const ares = ["'re", "r", "р"];

    const be = ["BE", "bi", "БИ"];
    const not = ["not", "nɑt", "нɑт"];
    const nots = ["n't", "nt", "нт"];

    return (
        <section className="cnicro">
            <div className="kimbo">
                <button onClick={() => setIndex((index + 1) % 3)}>Change letters <span>⬇️</span></button>
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