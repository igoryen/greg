import { useState } from "react";
import "../../styles/son/zunsna.scss";

const Zunsna = (prop) => {
    const [activeTab, setActiveTab] = useState("sss");
    return (
        <section id="zunsna">
            <div className="tabs">
                <button
                    className={`tab ${activeTab === "sss" ? "active" : ""}`}
                    onClick={() => setActiveTab("sss")}
                >
                    -S
                </button>
                <button
                    className={`tab ${activeTab === "ddd" ? "active" : ""}`}
                    onClick={() => setActiveTab("ddd")}
                >
                    -D
                </button>
            </div>


            <div className="tab-content">
                {activeTab === "sss" && <div className="sss">
                    <h1>The last sound is...</h1>

                    <div className="blair gonzalo">
                        <h1>1) ... hissing or hushing (sibilant)</h1>
                        <div className="pam">
                            <div className="chapelle">
                                <div className="dwight">⌚</div>
                                <div>wɑ<i className="voiced non">tʃ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>wɑ<i className="voiced non">tʃ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">watch
                                    <i className="insert">e</i>
                                    <i className="s_d">s</i>,
                                    watch<i className="insert">'</i><i className="s_d">s</i>, watches'
                                </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🍑</div>
                                <div>pi<i className="voiced non">tʃ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>pi
                                    <i className="voiced non">tʃ</i>
                                    <i className="inset">ɪ</i>
                                    <i className="aza">z</i>
                                </div>
                                <div className="spell_">peach
                                    <i className="insert">e</i>
                                    <i className="s_d">s</i>, peach
                                    <i className="insert">'</i>
                                    <i className="s_d">s</i>, peaches'
                                </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🪳</div>
                                <div>roʊ<i className="voiced non">tʃ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>roʊ<i className="voiced non">tʃ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">roach<i className="insert">e</i>
                                    <i className="s_d">s</i>, roach<i className="insert">'</i><i className="s_d">s</i>, roaches' </div>
                            </div>


                        </div>
                        <div className="pam">


                            <div className="chapelle">
                                <div className="dwight">🚌</div>
                                <div>bʌ<i className="voiced non">s</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>bʌ<i className="voiced non">s</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">bus<i className="insert">e</i>
                                    <i className="s_d">s</i>, bus<i className="insert">'</i><i className="s_d">s</i>, buses'</div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">💋</div>
                                <div>kɪ<i className="voiced non">s</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>kɪ<i className="voiced non">s</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">kiss<i className="insert">e</i>
                                    <i className="s_d">s</i>, kiss<i className="insert">'</i><i className="s_d">s</i>, kisses'</div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>ˈkɑrloʊ<i className="voiced non">s</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>ˈkɑrloʊ<i className="voiced non">s</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">Carlos<i className="insert">'</i><i className="s_d">s</i>, Carloses'</div>
                            </div>
                        </div>

                        <div className="pam">
                            <div className="chapelle">
                                <div className="dwight">🐟</div>
                                <div>fɪ<i className="voiced non">ʃ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>fɪ<i className="voiced non">ʃ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">fish<i className="insert">e</i>
                                    <i className="s_d">s</i>, fish<i className="insert">'</i><i className="s_d">s</i>, fishes'</div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🪥</div>
                                <div>brʌ<i className="voiced non">ʃ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>brʌ<i className="voiced non">ʃ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">brush<i className="insert">e</i>
                                    <i className="s_d">s</i>, brush<i className="insert">'</i><i className="s_d">s</i>, brushes'</div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🏁</div>
                                <div>ˈfɪnɪ<i className="voiced non">ʃ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>ˈfɪnɪ<i className="voiced non">ʃ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">finish<i className="insert">e</i>
                                    <i className="s_d">s</i>, finish<i className="insert">'</i><i className="s_d">s</i>, finishes'</div>
                            </div>

                        </div>


                        <div className="pam">

                            <div className="chapelle">
                                <div className="dwight">📛</div>
                                <div>bæ<i className="voiced non">dʒ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>bæ<i className="voiced non">dʒ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">badg<i className="prncd">e</i>
                                    <i className="s_d">s</i>, badge<i className="insert">'</i><i className="s_d">s</i>, badges' </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">📃</div>
                                <div>peɪ<i className="voiced non">dʒ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>peɪ<i className="voiced non">dʒ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">pag<i className="prncd">e</i>
                                    <i className="s_d">s</i>, page<i className="insert">'</i><i className="s_d">s</i>, pages' </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🏫</div>
                                <div>ˈkɑlɪ<i className="voiced non">dʒ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>ˈkɑlɪ<i className="voiced non">dʒ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">colleg<i className="prncd">e</i>
                                    <i className="s_d">s</i>, college<i className="insert">'</i><i className="s_d">s</i>, colleges' </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🌉</div>
                                <div>brɪ<i className="voiced non">dʒ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>brɪ<i className="voiced non">dʒ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">bridg<i className="prncd">e</i>
                                    <i className="s_d">s</i>, bridge<i className="insert">'</i><i className="s_d">s</i>, bridges' </div>
                            </div>
                        </div>

                        <div className="pam">

                            <div className="chapelle">
                                <div className="dwight">💆</div>
                                <div>məˈsɑ<i className="voiced non">ʒ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>məˈsɑ<i className="voiced non">ʒ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">massag<i className="prncd">e</i>
                                    <i className="s_d">s</i>, massage<i className="insert">'</i><i className="s_d">s</i>, massages'</div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>gəˈrɑ<i className="voiced non">ʒ</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>gəˈrɑ<i className="voiced non">ʒ</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">garag<i className="prncd">e</i>
                                    <i className="s_d">s</i>,
                                    garag<i className="prncd">e</i>
                                    <i className="insert">'</i><i className="s_d">s</i>, garag<i className="prncd">e</i>s'</div>
                            </div>
                        </div>
                        <div className="pam">

                            <div className="chapelle">
                                <div className="dwight">🌹</div>
                                <div>roʊ<i className="voiced non">z</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>roʊ<i className="voiced non">z</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">ros<i className="prncd">e</i>
                                    <i className="s_d">s</i>, rose<i className="insert">'</i><i className="s_d">s</i>, roses' </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🏆</div>
                                <div>praɪ<i className="voiced non">z</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>praɪ<i className="voiced non">z</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">priz<i className="prncd">e</i>
                                    <i className="s_d">s</i>, priz<i className="prncd">e</i><i className="insert">'</i><i className="s_d">s</i>, prizes'</div>
                            </div>

                            <div className="chapelle">
                                <div className="dwight">🥶</div>
                                <div>fri<i className="voiced non">z</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>fri<i className="voiced non">z</i><i className="inset">ɪ</i><i className="aza">z</i></div>
                                <div className="spell_">freeze -- freez<i className="prncd">e</i><i className="s_d">s</i> </div>
                            </div>
                        </div>

                    </div>

                    <div className="blair jorge">
                        <h1>2) ... voiced, vibrating, buzzy:</h1>
                        <div class="pam">
                            <div className="chapelle">
                                <div className="dwight">👩</div>
                                <div>ʃ<i className="voiced yes">i</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>ʃ<i className="voiced yes">i</i><i className="aza">z</i></div>
                                <div className="spell_">she -- she<i className="insert">'</i>
                                    <i className="s_d">s</i>
                                </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">👨</div>
                                <div>h<i className="voiced yes">i</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>h<i className="voiced yes">i</i><i className="aza">z</i></div>
                                <div className="spell_">he -- his,
                                    he<i className="insert">'</i><i className="s_d">s</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🔑</div>
                                <div>k<i className="voiced yes">i</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>k<i className="voiced yes">i</i><i className="aza">z</i></div>
                                <div className="spell_">
                                    key -- key<i className="s_d">s</i>,
                                    key<i className="insert">'</i><i className="s_d">s</i>,
                                    key<i className="s_d">s</i><i className="insert">'</i>
                                </div>
                            </div>
                        </div>

                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>məˈri<i className="voiced yes">ə</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>məˈri<i className="voiced yes">ə</i><i className="aza">z</i></div>
                            <div className="spell_">
                                Maria -- Maria<i className="s_d">s</i>,
                                Maria<i className="insert">'</i><i className="s_d">s</i>,
                                Maria<i className="s_d">s</i><i className="insert">'</i>
                            </div>
                        </div>

                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>ˈbrʌð<i className="voiced yes">ɚ</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>ˈbrʌð<i className="voiced yes">ɚ</i><i className="aza">z</i></div>
                            <div className="spell_">
                                brother -- brother<i className="s_d">s</i>,
                                brother<i className="insert">'</i><i className="s_d">s</i>,
                                brother<i className="s_d">s</i><i className="insert">'</i>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">0️⃣</div>
                            <div>ˈzir<i className="voiced yes">oʊ</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>ˈzir<i className="voiced yes">oʊ</i><i className="aza">z</i></div>
                            <div className="spell_">
                                zero -- zero<i className="s_d">s</i>,
                                zero<i className="insert">'</i><i className="s_d">s</i>,
                                zero<i className="s_d">s</i><i className="insert">'</i>
                            </div>
                        </div>

                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>d<i className="voiced yes">eɪ</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>d<i className="voiced yes">eɪ</i><i className="aza">z</i></div>
                            <div className="spell_">
                                day -- day<i className="s_d">s</i>,
                                day<i className="insert">'</i><i className="s_d">s</i>,
                                day<i className="s_d">s</i><i className="insert">'</i>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">👟</div>
                            <div>ʃ<i className="voiced yes">u</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>ʃ<i className="voiced yes">u</i><i className="aza">z</i></div>
                            <div className="spell_">
                                shoe -- shoe<i className="s_d">s</i>,
                                shoe<i className="insert">'</i><i className="s_d">s</i>,
                                shoe<i className="s_d">s</i><i className="insert">'</i></div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🐄</div>
                            <div>k<i className="voiced yes">aʊ</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>k<i className="voiced yes">aʊ</i><i className="aza">z</i></div>
                            <div className="spell_">
                                cow -- cow<i className="s_d">s</i>,
                                cow<i className="insert">'</i><i className="s_d">s</i>,
                                cow<i className="s_d">s</i><i className="insert">'</i> </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">👦</div>
                            <div>b<i className="voiced yes">ɔɪ</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>b<i className="voiced yes">ɔɪ</i><i className="aza">z</i></div>
                            <div className="spell_">
                                boy -- boy<i className="s_d">s</i>,
                                boy<i className="insert">'</i><i className="s_d">s</i>,
                                boy<i className="s_d">s</i><i className="insert">'</i></div>
                        </div>

                    </div>

                    <div className="blair jorge">

                        <div className="pam">
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>dʒɪ<i className="voiced yes">m</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>dʒɪ<i className="voiced yes">m</i><i className="aza">z</i></div>
                                <div className="spell_">
                                    Jim<i className="s_d">s</i>,
                                    Jim<i className="insert">'</i><i className="s_d">s</i>,
                                    Jim<i className="s_d">s</i><i className="insert">'</i>
                                </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>mɑ<i className="voiced yes">m</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>mɑ<i className="voiced yes">m</i><i className="aza">z</i></div>
                                <div className="spell_">
                                    mom<i className="s_d">s</i>,
                                    mom<i className="insert">'</i><i className="s_d">s</i>
                                </div>
                            </div>
                        </div>

                        <div className="pam">

                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>bɛ<i className="voiced yes">n</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>bɛ<i className="voiced yes">n</i><i className="aza">z</i></div>
                                <div className="spell_">
                                    Ben<i className="s_d">s</i>,
                                    Ben<i className="insert">'</i><i className="s_d">s</i>,
                                    Ben<i className="s_d">s</i><i className="insert">'</i>
                                </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🖊️</div>
                                <div>pɛ<i className="voiced yes">n</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>pɛ<i className="voiced yes">n</i><i className="aza">z</i></div>
                                <div className="spell_">
                                    pen<i className="s_d">s</i>,
                                    pen<i className="insert">'</i><i className="s_d">s</i>,
                                    pen<i className="s_d">s</i><i className="insert">'</i>
                                </div>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">💍</div>
                            <div>rɪ<i className="voiced yes">ŋ</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>rɪ<i className="voiced yes">ŋ</i><i className="aza">z</i></div>
                            <div className="spell_">
                                ring<i className="s_d">s</i>,
                                ring<i className="insert">'</i><i className="s_d">s</i>,
                                ring<i className="s_d">s</i><i className="insert">'</i>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🚗</div>
                            <div>kɑ<i className="voiced yes">r</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>kɑ<i className="voiced yes">r</i><i className="aza">z</i></div>
                            <div className="spell_">
                                car<i className="s_d">s</i>,
                                car<i className="insert">'</i><i className="s_d">s</i>,
                                car<i className="s_d">s</i><i className="insert">'</i>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">⚽</div>
                            <div>bɔ<i className="voiced yes">l</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>bɔ<i className="voiced yes">l</i><i className="aza">z</i></div>
                            <div className="spell_">
                                ball<i className="s_d">s</i>,
                                ball<i className="insert">'</i><i className="s_d">s</i>,
                                ball<i className="s_d">s</i><i className="insert">'</i> </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>dʒɑ<i className="voiced yes">b</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>dʒɑ<i className="voiced yes">b</i><i className="aza">z</i></div>
                            <div className="spell_">
                                job<i className="s_d">s</i>,
                                job<i className="insert">'</i><i className="s_d">s</i>,
                                job<i className="s_d">s</i><i className="insert">'</i>
                            </div>
                        </div>


                        <div className="pam">


                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>dæ<i className="voiced yes">d</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>dæ<i className="voiced yes">d</i><i className="aza">z</i></div>
                                <div className="spell_">
                                    dad<i className="s_d">s</i>,
                                    dad<i className="insert">'</i><i className="s_d">s</i>,
                                    dad<i className="s_d">s</i><i className="insert">'</i>
                                </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>kɪ<i className="voiced yes">d</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>kɪ<i className="voiced yes">d</i><i className="aza">z</i></div>
                                <div className="spell_">
                                    kid<i className="s_d">s</i>,
                                    kid<i className="insert">'</i><i className="s_d">s</i>,
                                    kid<i className="s_d">s</i><i className="insert">'</i>
                                </div>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🐕</div>
                            <div>dɑ<i className="voiced yes">g</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>dɑ<i className="voiced yes">g</i><i className="aza">z</i></div>
                            <div className="spell_">
                                dog<i className="s_d">s</i>,
                                dog<i className="insert">'</i><i className="s_d">s</i>,
                                dog<i className="s_d">s</i><i className="insert">'</i>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>slɑ<i className="voiced yes">v</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>slɑ<i className="voiced yes">v</i><i className="aza">z</i></div>
                            <div className="spell_">
                                Slav<i className="s_d">s</i>,
                                Slav<i className="insert">'</i><i className="s_d">s</i>,
                                Slav<i className="s_d">s</i><i className="insert">'</i>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>beɪ<i className="voiced yes">ð</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>beɪ<i className="voiced yes">ð</i><i className="aza">z</i></div>
                            <div className="spell_">bathe<i className="s_d">s</i></div>
                        </div>
                    </div>

                    <div className="blair frisco">
                        <h1>3) ... voiceless, whispery, quiet: </h1>
                        <div className="pam">
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>dʒæ<i className="voiced non">k</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>dʒæ<i className="voiced non">k</i><i className="asa">s</i></div>
                                <div className="spell_">
                                    Jack<i className="s_d">s</i>,
                                    Jack<i className="insert">'</i><i className="s_d">s</i>,
                                    Jack<i className="s_d">s</i><i className="insert">'</i>
                                </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">📖</div>
                                <div>bʊ<i className="voiced non">k</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>bʊ<i className="voiced non">k</i><i className="asa">s</i></div>
                                <div className="spell_">
                                    book<i className="s_d">s</i>,
                                    book<i className="insert">'</i><i className="s_d">s</i>
                                </div>
                            </div>
                        </div>

                        <div className="pam">
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>ɪ<i className="voiced non">t</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>ɪ<i className="voiced non">t</i><i className="asa">s</i></div>
                                <div className="spell_">
                                    its,
                                    it<i className="insert">'</i><i className="s_d">s</i>
                                </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🐈</div>
                                <div>kæ<i className="voiced non">t</i></div>
                                <div>+<i className="phoneme">S</i>=</div>
                                <div>kæ<i className="voiced non">t</i><i className="asa">s</i></div>
                                <div className="spell_">
                                    cat<i className="s_d">s</i>,
                                    cat<i className="insert">'</i><i className="s_d">s</i>,
                                    cat<i className="s_d">s</i><i className="insert">'</i>
                                </div>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">☕</div>
                            <div>kʌ<i className="voiced non">p</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>kʌ<i className="voiced non">p</i><i className="asa">s</i></div>
                            <div className="spell_">
                                cup<i className="s_d">s</i>,
                                cup<i className="insert">'</i><i className="s_d">s</i>
                            </div>
                        </div>


                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>kʌ<i className="voiced non">f</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>kʌ<i className="voiced non">f</i><i className="asa">s</i></div>
                            <div className="spell_">
                                cuff<i className="s_d">s</i>,
                                cuff<i className="insert">'</i><i className="s_d">s</i>
                            </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>mɪ<i className="voiced non">θ</i></div>
                            <div>+<i className="phoneme">S</i>=</div>
                            <div>mɪ<i className="voiced non">θ</i><i className="asa">s</i></div>
                            <div className="spell_">myth<i className="s_d">s</i>, myth<i className="insert">'</i><i className="s_d">s</i></div>
                        </div>
                    </div>


                </div>
                }

                {activeTab === "ddd" && <div className="ddd">
                    <h1>The last sound is...</h1>

                    <div className="blair gonzalo">
                        <h1>1) ... /t/ or /d/</h1>
                        <div className="pam">
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>weɪ<i className="voiced non">t</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>weɪ<i className="voiced non">t</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                                <div className="spell_">wait -- wait<i className="insert">e</i><i className="s_d">d</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>loʊ<i className="voiced non">d</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>loʊ<i className="voiced non">d</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                                <div className="spell_">load -- load<i className="insert">e</i><i className="s_d">d</i> </div>
                            </div>
                            {/* <div className="chapelle">
                            <div className="dwight">🍑</div>
                            <div>pi<i className="voiced non">tʃ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>pi<i className="voiced non">tʃ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">peaches, peach's, peaches' </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🪳</div>
                            <div>roʊ<i className="voiced non">tʃ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>roʊ<i className="voiced non">tʃ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">roaches, roach's, roaches' </div>
                        </div> */}


                        </div>
                        {/* <div className="pam">


                        <div className="chapelle">
                            <div className="dwight">🚌</div>
                            <div>bʌ<i className="voiced non">s</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>bʌ<i className="voiced non">s</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">buses, bus's, buses'</div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">💋</div>
                            <div>kɪ<i className="voiced non">s</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>kɪ<i className="voiced non">s</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">kisses, kiss's, kisses'</div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>ˈkɑrloʊ<i className="voiced non">s</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>ˈkɑrloʊ<i className="voiced non">s</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">Carlos's, Carloses'</div>
                        </div>
                    </div> */}

                        {/* <div className="pam">
                        <div className="chapelle">
                            <div className="dwight">🐟</div>
                            <div>fɪ<i className="voiced non">ʃ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>fɪ<i className="voiced non">ʃ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">fishes, fish's, fishes'</div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🪥</div>
                            <div>brʌ<i className="voiced non">ʃ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>brʌ<i className="voiced non">ʃ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">brushes, brush's, brushes'</div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🏁</div>
                            <div>ˈfɪnɪ<i className="voiced non">ʃ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>ˈfɪnɪ<i className="voiced non">ʃ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">finishes, finish's, finishes'</div>
                        </div>

                    </div> */}


                        {/* <div className="pam">

                        <div className="chapelle">
                            <div className="dwight">📛</div>
                            <div>bæ<i className="voiced non">dʒ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>bæ<i className="voiced non">dʒ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">badges, badge's, badges' </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">📃</div>
                            <div>peɪ<i className="voiced non">dʒ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>peɪ<i className="voiced non">dʒ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">pages, page's, pages' </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🏫</div>
                            <div>ˈkɑlɪ<i className="voiced non">dʒ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>ˈkɑlɪ<i className="voiced non">dʒ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">colleges, college's, colleges' </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🌉</div>
                            <div>brɪ<i className="voiced non">dʒ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>brɪ<i className="voiced non">dʒ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">bridges, bridge's, bridges' </div>
                        </div>
                    </div> */}

                        {/* <div className="pam">

                        <div className="chapelle">
                            <div className="dwight">💆</div>
                            <div>məˈsɑ<i className="voiced non">ʒ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>məˈsɑ<i className="voiced non">ʒ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">massages, massage's, massages'</div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>gəˈrɑ<i className="voiced non">ʒ</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>gəˈrɑ<i className="voiced non">ʒ</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">garages, garage's, garages'</div>
                        </div>
                    </div> */}


                        {/* <div className="pam">

                        <div className="chapelle">
                            <div className="dwight">🌹</div>
                            <div>roʊ<i className="voiced non">z</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>roʊ<i className="voiced non">z</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">roses, rose's, roses' </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🏆</div>
                            <div>praɪ<i className="voiced non">z</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>praɪ<i className="voiced non">z</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">prizes, prize's, prizes'</div>
                        </div>

                        <div className="chapelle">
                            <div className="dwight">🥶</div>
                            <div>fri<i className="voiced non">z</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>fri<i className="voiced non">z</i><i className="inset">ɪ</i><i className="aza">d</i></div>
                            <div className="spell_">freezes </div>
                        </div>
                    </div> */}

                    </div>


                    <div className="blair jorge">
                        <h1>2) ... voiced, vibrating, buzzy:</h1>
                        <div class="pam">
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>fr<i className="voiced yes">i</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>fr<i className="voiced yes">i</i><i className="aza">d</i></div>
                                <div className="spell_">free -- free<i className="s_d">d</i>  </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>p<i className="voiced yes">i</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>p<i className="voiced yes">i</i><i className="aza">d</i></div>
                                <div className="spell_">pee -- pee<i className="s_d">d</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>lʌ<i className="voiced yes">v</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>lʌ<i className="voiced yes">v</i><i className="aza">d</i></div>
                                <div className="spell_">love -- love<i className="s_d">d</i>  </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>mu<i className="voiced yes">v</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>mu<i className="voiced yes">v</i><i className="aza">d</i></div>
                                <div className="spell_">move -- move<i className="s_d">d</i>  </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>seɪ<i className="voiced yes">v</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>seɪ<i className="voiced yes">v</i><i className="aza">d</i></div>
                                <div className="spell_">save -- save<i className="s_d">d</i>  </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>kɛ<i className="voiced yes">r</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>kɛ<i className="voiced yes">r</i><i className="aza">d</i></div>
                                <div className="spell_">care -- care<i className="s_d">d</i>  </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div><i className="voiced yes">oʊ</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div><i className="voiced yes">oʊ</i><i className="aza">d</i></div>
                                <div className="spell_">owe -- owe<i className="s_d">d</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>ju<i className="voiced yes">z</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>ju<i className="voiced yes">z</i><i className="aza">d</i></div>
                                <div className="spell_">use -- use<i className="s_d">d</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>lɪ<i className="voiced yes">v</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>lɪ<i className="voiced yes">v</i><i className="aza">d</i></div>
                                <div className="spell_">live -- live<i className="s_d">d</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>l<i className="voiced yes">aɪ</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>l<i className="voiced yes">aɪ</i><i className="aza">d</i></div>
                                <div className="spell_">lie -- lie<i className="s_d">d</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>t<i className="voiced yes">aɪ</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>t<i className="voiced yes">aɪ</i><i className="aza">d</i></div>
                                <div className="spell_">tie -- tie<i className="s_d">d</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>sk<i className="voiced yes">i</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>sk<i className="voiced yes">i</i><i className="aza">d</i></div>
                                <div className="spell_">ski -- ski<i className="insert slash">e</i><i className="s_d">d</i>  </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">🔑</div>
                                <div>k<i className="voiced yes">i</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>k<i className="voiced yes">i</i><i className="aza">d</i></div>
                                <div className="spell_">key -- key<i className="insert slash">e</i><i className="s_d">d</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>p<i className="voiced yes">eɪ</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>p<i className="voiced yes">eɪ</i><i className="aza">d</i></div>
                                <div className="spell_">pay -- pay<i className="insert slash">e</i><i className="s_d">d</i>  </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>pl<i className="voiced yes">eɪ</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>pl<i className="voiced yes">eɪ</i><i className="aza">d</i></div>
                                <div className="spell_">play -- play<i className="insert slash">e</i><i className="s_d">d</i>  </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>st<i className="voiced yes">eɪ</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>st<i className="voiced yes">eɪ</i><i className="aza">d</i></div>
                                <div className="spell_">stay -- stay<i className="insert slash">e</i><i className="s_d">d</i>  </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>tr<i className="voiced yes">aɪ</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>tr<i className="voiced yes">aɪ</i><i className="aza">d</i></div>
                                <div className="spell_">
                                    try -- tr<i className="transf">i</i>
                                    <i className="insert slash">e</i>
                                    <i className="s_d">d</i>
                                </div>
                            </div>

                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>fr<i className="voiced yes">aɪ</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>fr<i className="voiced yes">aɪ</i><i className="aza">d</i></div>
                                <div className="spell_">
                                    fry -- fr<i className="transf">i</i>
                                    <i className="insert slash">e</i>
                                    <i className="s_d">d</i>
                                </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>dr<i className="voiced yes">aɪ</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>dr<i className="voiced yes">aɪ</i><i className="aza">d</i></div>
                                <div className="spell_">
                                    dry -- dr<i className="transf">i</i>
                                    <i className="insert slash">e</i>
                                    <i className="s_d">d</i>
                                </div>
                            </div>


                        </div>

                        {/* <div className="chapelle">
                        <div className="dwight">&nbsp;</div>
                        <div>məˈri<i className="voiced yes">ə</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>məˈri<i className="voiced yes">ə</i><i className="aza">d</i></div>
                        <div className="spell_">Maria -- Marias, Maria's, Marias'</div>
                    </div>

                    <div className="chapelle">
                        <div className="dwight">&nbsp;</div>
                        <div>ˈbrʌð<i className="voiced yes">ɚ</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>ˈbrʌð<i className="voiced yes">ɚ</i><i className="aza">d</i></div>
                        <div className="spell_">brother -- brothers, brother's, brothers'</div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">0️⃣</div>
                        <div>ˈzir<i className="voiced yes">oʊ</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>ˈzir<i className="voiced yes">oʊ</i><i className="aza">d</i></div>
                        <div className="spell_">zero -- zeros, zero's, zeros' </div>
                    </div>

                    <div className="chapelle">
                        <div className="dwight">&nbsp;</div>
                        <div>d<i className="voiced yes">eɪ</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>d<i className="voiced yes">eɪ</i><i className="aza">d</i></div>
                        <div className="spell_">day -- days, day's, days'</div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">👟</div>
                        <div>ʃ<i className="voiced yes">u</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>ʃ<i className="voiced yes">u</i><i className="aza">d</i></div>
                        <div className="spell_">shoe -- shoes, shoe's, shoes' </div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">🐄</div>
                        <div>k<i className="voiced yes">aʊ</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>k<i className="voiced yes">aʊ</i><i className="aza">d</i></div>
                        <div className="spell_">cow -- cows, cow's, cows' </div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">👦</div>
                        <div>b<i className="voiced yes">ɔɪ</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>b<i className="voiced yes">ɔɪ</i><i className="aza">d</i></div>
                        <div className="spell_">boy -- boys, boy's, boys' </div>
                    </div> */}

                    </div>

                    {/* <div className="blair jorge">

                    <div className="pam">
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>dʒɪ<i className="voiced yes">m</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>dʒɪ<i className="voiced yes">m</i><i className="aza">d</i></div>
                            <div className="spell_">Jims, Jim's, Jims'</div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>mɑ<i className="voiced yes">m</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>mɑ<i className="voiced yes">m</i><i className="aza">d</i></div>
                            <div className="spell_">moms, mom's</div>
                        </div>
                    </div>

                    <div className="pam">

                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>bɛ<i className="voiced yes">n</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>bɛ<i className="voiced yes">n</i><i className="aza">d</i></div>
                            <div className="spell_">Bens, Ben's, Bens'</div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🖊️</div>
                            <div>pɛ<i className="voiced yes">n</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>pɛ<i className="voiced yes">n</i><i className="aza">d</i></div>
                            <div className="spell_">pens, pen's, pens' </div>
                        </div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">💍</div>
                        <div>rɪ<i className="voiced yes">ŋ</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>rɪ<i className="voiced yes">ŋ</i><i className="aza">d</i></div>
                        <div className="spell_">rings, ring's, rings' </div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">🚗</div>
                        <div>kɑ<i className="voiced yes">r</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>kɑ<i className="voiced yes">r</i><i className="aza">d</i></div>
                        <div className="spell_">cars, car's, cars' </div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">⚽</div>
                        <div>bɔ<i className="voiced yes">l</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>bɔ<i className="voiced yes">l</i><i className="aza">d</i></div>
                        <div className="spell_">balls, ball's, balls' </div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">&nbsp;</div>
                        <div>dʒɑ<i className="voiced yes">b</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>dʒɑ<i className="voiced yes">b</i><i className="aza">d</i></div>
                        <div className="spell_">jobs, job's, jobs'</div>
                    </div>


                    <div className="pam">


                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>dæ<i className="voiced yes">d</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>dæ<i className="voiced yes">d</i><i className="aza">d</i></div>
                            <div className="spell_">dads, dad's, dads' </div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>kɪ<i className="voiced yes">d</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>kɪ<i className="voiced yes">d</i><i className="aza">d</i></div>
                            <div className="spell_">kids, kid's, kids'</div>
                        </div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">🐕</div>
                        <div>dɑ<i className="voiced yes">g</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>dɑ<i className="voiced yes">g</i><i className="aza">d</i></div>
                        <div className="spell_">dogs, dog's, dogs' </div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">&nbsp;</div>
                        <div>slɑ<i className="voiced yes">v</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>slɑ<i className="voiced yes">v</i><i className="aza">d</i></div>
                        <div className="spell_">Slavs, Slav's, Slavs'</div>
                    </div>
                    <div className="chapelle">
                        <div className="dwight">&nbsp;</div>
                        <div>beɪ<i className="voiced yes">ð</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>beɪ<i className="voiced yes">ð</i><i className="aza">d</i></div>
                        <div className="spell_">bathes</div>
                    </div>
                </div> */}

                    <div className="blair frisco">
                        <h1>3) ... voiceless, whispery, quiet: </h1>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>hoʊ<i className="voiced non">p</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>hoʊ<i className="voiced non">p</i><i className="asa">t</i></div>
                            <div className="spell_">hope -- hope<i className="s_d">d</i></div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>laɪ<i className="voiced non">k</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>laɪ<i className="voiced non">k</i><i className="asa">t</i></div>
                            <div className="spell_">like -- like<i className="s_d">d</i></div>
                        </div>
                        <div className="pam">


                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>æs<i className="voiced non">k</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>æs<i className="voiced non">k</i><i className="asa">t</i></div>
                                <div className="spell_">ask -- ask<i className="insert slash">e</i><i className="s_d">d</i></div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">📖</div>
                                <div>bʊ<i className="voiced non">k</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>bʊ<i className="voiced non">k</i><i className="asa">t</i></div>
                                <div className="spell_">book -- book<i className="insert slash">e</i><i className="s_d">d</i> </div>
                            </div>
                            <div className="chapelle">
                                <div className="dwight">&nbsp;</div>
                                <div>kʌ<i className="voiced non">f</i></div>
                                <div>+<i className="phoneme">D</i>=</div>
                                <div>kʌ<i className="voiced non">f</i><i className="asa">t</i></div>
                                <div className="spell_">cuff -- cuff<i className="insert slash">e</i><i className="s_d">d</i> </div>
                            </div>
                        </div>

                        {/* <div className="pam">
                        <div className="chapelle">
                            <div className="dwight">&nbsp;</div>
                            <div>ɪ<i className="voiced non">t</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>ɪ<i className="voiced non">t</i><i className="asa">t</i></div>
                            <div className="spell_"> its, it's</div>
                        </div>
                        <div className="chapelle">
                            <div className="dwight">🐈</div>
                            <div>kæ<i className="voiced non">t</i></div>
                            <div>+<i className="phoneme">D</i>=</div>
                            <div>kæ<i className="voiced non">t</i><i className="asa">t</i></div>
                            <div className="spell_">cats, cat's, cats' </div>
                        </div>
                    </div> */}




                        {/* <div className="chapelle">
                        <div className="dwight">&nbsp;</div>
                        <div>mɪ<i className="voiced non">θ</i></div>
                        <div>+<i className="phoneme">D</i>=</div>
                        <div>mɪ<i className="voiced non">θ</i><i className="asa">t</i></div>
                        <div className="spell_">myths, myth's</div>
                    </div> */}
                    </div>


                </div>
                }
            </div>


        </section >
    )
};

export default Zunsna;