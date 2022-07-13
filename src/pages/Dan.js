import '../styles/dan/danMain.scss';
import Avatar from "../images/dan/avatar.jpg";
import React from "react";
import GraphForDan from '../components/GraphForDan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import { faHouseDamage, faPercent, faFileAlt } from '@fortawesome/free-solid-svg-icons'



class Dan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('dan');
    }

    componentWillUnmount() {
        document.body.classList.remove('dan');
    }

    resetFormElement = function (e) {
        console.log("reset from inside")
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    render() {
        return (
            <section className="main" id="dan">

                <div id="n_johnny">
                    <div className="n_clarence">
                        <div className="n_philip">
                            <div className="n_edna">top-bar</div>
                            <div className="n_edna">banner</div>
                            <div className="n_monica">
                                {/* left column */}
                                <div className="n_tiffany one">
                                    <div className="n_tony">Dashboard</div>
                                    <div className="n_jeffery">
                                        <div className="n_rosa">
                                            <div className="n_jimmy">File status</div>
                                            <div className="n_earl">
                                                <div className="n_cindy">
                                                    <div className="n_danny n_antonio">
                                                        <div id="doughnut-progress">
                                                            <GraphForDan />
                                                            <div id="addText" ></div>
                                                        </div>
                                                    </div>
                                                    <div className="n_danny n_luis">
                                                        <div className="date">April 2, 2015</div>
                                                        <div className="n_mike">Closing date</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="n_rosa">
                                            <div className="n_jimmy">Milestones</div>
                                            <div className="n_earl">
                                                <div className="n_bryan">
                                                    <div className="n_grace first reached">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>1</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">New file</div>
                                                                <div>05/17/2018, 1:53 pm</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_grace reached">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>2</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">File accepted</div>
                                                                <div>05/17/2018, 2:01 pm</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_grace reached">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>3</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">Client contacted</div>
                                                                <div>05/18/2018, 10:19 am</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_grace reached">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>4</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">Received mortgage instructions</div>
                                                                <div>06/27/2018, 11:08 am</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_grace reached">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>5</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">Arranged signing meeting</div>
                                                                <div>06/27/2018, 11:08 am</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_grace reached">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>6</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">Signing complete</div>
                                                                <div>06/30/2018, 9:09 am</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_grace reached">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>7</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">Funds received</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_grace reached">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>8</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">Keys ready</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_grace">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>9</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">Deed registered</div>
                                                                {/* <div>07/04/2018, 9:58 am</div> */}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_grace last">
                                                        <div className="n_curtis">
                                                            <div className="n_victoria">
                                                                <div className="n_stanley">
                                                                    <div className="n_wendy">
                                                                        <span>10</span>
                                                                    </div>
                                                                    <div className="n_nathan"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="n_leonard">
                                                            <div className="n_manuel">
                                                                <div className="report">File closed</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* middle column */}
                                <div className="n_tiffany two">
                                    <div className="n_tony ">Transaction</div>
                                    <div className="n_jeffery">
                                        <div className="n_rosa">
                                            <div className="n_jimmy">File information</div>
                                            <div className="n_earl">
                                                <div className="n_rodney">
                                                    <div className="n_norman">
                                                        <div className="title">File #</div>
                                                        <div className="value">5000581</div>
                                                    </div>
                                                    <div className="n_norman">
                                                        <div className="title">Closing date</div>
                                                        <div className="value">7/23/2018</div>
                                                    </div>
                                                    <div className="n_norman">
                                                        <div className="title">Parties</div>
                                                        <div className="value">Robert Groves</div>
                                                    </div>
                                                    <div className="n_norman">
                                                        <div className="title">Province</div>
                                                        <div className="value">ON</div>
                                                    </div>
                                                    <div className="n_norman">
                                                        <div className="title">Referral source</div>
                                                        <div className="value">Verico</div>
                                                    </div>
                                                    <div className="n_norman">
                                                        <div className="title">Service</div>
                                                        <div className="value">Refinance</div>
                                                    </div>
                                                    <div className="n_norman">
                                                        <div className="title">Processing office</div>
                                                        <div className="value">ON-NWHCS</div>
                                                    </div>
                                                    <div className="n_norman">
                                                        <div className="title">Referral ref. #</div>
                                                        <div className="value"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="n_rosa">
                                            <div className="n_jimmy">Property location</div>
                                            <div className="n_earl">
                                                <div className="n_edith"></div>
                                            </div>
                                        </div>

                                        <div className="n_rosa">
                                            <div className="n_jimmy">Mortgage amount</div>
                                            <div className="n_earl">
                                                <div className="n_sherry">
                                                    <span>$455,555</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* right column */}

                                <div className="n_tiffany three">
                                    <div className="n_tony">People</div>
                                    <div className="n_jeffery">
                                        <div className="n_rosa">
                                            <div className="n_jimmy">File participants</div>
                                            <div className="n_earl">
                                                <div className="n_sylvia">
                                                    <div className="n_josephine">
                                                        <div className="photo">
                                                            <img src={Avatar} alt="person" />
                                                        </div>
                                                        <div className="name">Kathy Noga</div>
                                                        <div className="jobtitle">Executive Law Clerk</div>
                                                        <div className="email">
                                                            <a href="mailto:kathy@lawlignment.com?Subject=Hello%20again" target="_top">kathy@lawlignment.com</a>
                                                        </div>
                                                        <div className="phone">
                                                            <a href="tel:416-628-5278">(416) 628-5278 Ext: 0</a>
                                                        </div>
                                                    </div>

                                                    <div className="n_josephine">
                                                        <div className="photo">
                                                            <img src={Avatar} alt="person" />
                                                        </div>
                                                        <div className="name">Kathy Noga</div>
                                                        <div className="jobtitle">Executive Law Clerk</div>
                                                        <div className="email">
                                                            <a href="mailto:kathy@lawlignment.com?Subject=Hello%20again" target="_top">kathy@lawlignment.com</a>
                                                        </div>
                                                        <div className="phone">
                                                            <a href="tel:416-628-5278">(416) 628-5278 Ext: 0</a>
                                                        </div>
                                                    </div>

                                                    <div className="n_josephine">
                                                        <div className="photo">
                                                            <img src={Avatar} alt="person" />
                                                        </div>
                                                        <div className="name">Natalie McFarlane</div>
                                                        <div className="jobtitle">Lawyer</div>
                                                        <div className="email">
                                                            <a href="mailto:natalie@lawlignment.com?Subject=Hello%20again" target="_top">natalie@lawlignment.com</a>
                                                        </div>
                                                        <div className="phone">
                                                            <a href="tel:416-628-5278">(416) 628-5278 Ext: 1</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="n_rosa">
                                            <div className="n_jimmy">
                                                <span>File notes</span>
                                            </div>
                                            <div className="n_earl">
                                                <div className="n_allen notes">
                                                    <div className="add-note">
                                                        <button type="button">Add</button>
                                                    </div>

                                                    <div id="file_notes">

                                                        <div className="n_thelma">
                                                            <div className="n_travis">
                                                                <div className="recipients-block">
                                                                    <span>To: </span>
                                                                    {/* <div className="recepients"> */}
                                                                    <span>Natalie McFarlane (natalie@lawlignment.com)</span>,
                                                                    <span>Kathy Noga (kathy@lawlignment.com)</span>
                                                                    {/* </div> */}
                                                                </div>
                                                                <div className="note-attachments"><i className="fas fa-paperclip"></i>n/a</div>
                                                            </div>
                                                            <div className="note-text">Today will be a rush - perhaps on the weekend. I will confirm when the details have been finalized.</div>

                                                            <div className="n_sheila">
                                                                <div className="n_ethel">
                                                                    <div className="note-author">Felecia Henry</div>
                                                                    <div className="note-date-time">07/20/2018 @ 2:14pm</div>
                                                                </div>
                                                                <button type="button">Reply</button>
                                                            </div>
                                                            <div className="n_marjorie">
                                                                <button type="button"><i className="fas fa-lock"></i> Set internal</button>
                                                                <button type="button"><i className="fas fa-exclamation"></i>Set important</button>
                                                            </div>
                                                        </div>

                                                        <div className="n_thelma">
                                                            <div className="n_travis">
                                                                <div className="recipients-block">
                                                                    <span>To: </span>
                                                                    {/* <div className="recepients"> */}
                                                                    <span>Felecia Henry (felecia@gmail.com)</span>,
                                                                    <span>Kathy Noga (kathy@lawlignment.com)</span>
                                                                    {/* </div> */}
                                                                </div>
                                                                <div className="note-attachments"><i className="fas fa-paperclip"></i>n/a</div>
                                                            </div>
                                                            <div className="note-text">To be or not to be: that is the question.</div>

                                                            <div className="n_sheila">
                                                                <div className="n_ethel">
                                                                    <div className="note-author">Natalie McFarlane</div>
                                                                    <div className="note-date-time">07/21/2018 @ 2:00pm</div>
                                                                </div>
                                                                <button type="button">Reply</button>
                                                            </div>
                                                            <div className="n_marjorie">
                                                                <button type="button"><i className="fas fa-lock"></i> Set internal</button>
                                                                <button type="button"><i className="fas fa-exclamation"></i>Set important</button>
                                                            </div>
                                                        </div>

                                                        <div className="n_thelma">
                                                            <div className="n_travis">
                                                                <div className="recipients-block">
                                                                    <span>To: </span>
                                                                    {/* <div className="recepients"> */}
                                                                    <span>Philip Jennings (thespy@gmail.com)</span>,
                                                                    <span>Kathy Noga (kathy@lawlignment.com)</span>
                                                                    {/* </div> */}
                                                                </div>
                                                                <div className="note-attachments"><i className="fas fa-paperclip"></i>n/a</div>
                                                            </div>
                                                            <div className="note-text">This must be done ASAP!</div>

                                                            <div className="n_sheila">
                                                                <div className="n_ethel">
                                                                    <div className="note-author">Elisabeth Jennings</div>
                                                                    <div className="note-date-time">06/21/2018 @ 2:00pm</div>
                                                                </div>
                                                                <button type="button">Reply</button>
                                                            </div>
                                                            <div className="n_marjorie">
                                                                <button type="button"><i className="fas fa-lock"></i> Set internal</button>
                                                                <button type="button"><i className="fas fa-exclamation"></i>Set important</button>
                                                            </div>
                                                        </div>

                                                        <div className="n_thelma">
                                                            <div className="n_travis">
                                                                <div className="recipients-block">
                                                                    <span>To: </span>
                                                                    {/* <div className="recepients"> */}
                                                                    <span>Philip Jennings (thespy@gmail.com)</span>,
                                                                    <span>Elisabeth Jennings (liz@gmail.com)</span>
                                                                    {/* </div> */}
                                                                </div>
                                                                <div className="note-attachments"><i className="fas fa-paperclip"></i>n/a</div>
                                                            </div>
                                                            <div className="note-text">When do we do this?!</div>

                                                            <div className="n_sheila">
                                                                <div className="n_ethel">
                                                                    <div className="note-author">Page Jennings</div>
                                                                    <div className="note-date-time">06/19/2018 @ 2:00pm</div>
                                                                </div>
                                                                <button type="button">Reply</button>
                                                            </div>
                                                            <div className="n_marjorie">
                                                                <button type="button"><i className="fas fa-lock"></i> Set internal</button>
                                                                <button type="button"><i className="fas fa-exclamation"></i>Set important</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div id="grad_cover" className="showing"></div>
                                                    <button className="notes-toggle closed" id="notes_toggle">
                                                        Show more
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        {/* codectomy 181023*/}
                                        <div className="n_rosa">
                                            <div className="n_jimmy">File documents</div>
                                            <div className="n_earl">
                                                <div className="n_lauren">

                                                    <div className="n_geraldine">
                                                        <div className="doc-status"></div>
                                                        {/*<i className="fas fa-money-check-alt"></i> */}
                                                        <FontAwesomeIcon icon={faMoneyBillAlt} />
                                                        <div className="doc-title">Void</div>
                                                        {/* <div>Doc type: </div> */}
                                                        <div className="req-by">Required by <span>1999-01-01</span></div>
                                                        <div className="modal">
                                                            {/* Modal content */}
                                                            <div className="modal-content">
                                                                <span className="closemodal" onClick={this.resetFormElement}></span>
                                                                <div className="modalwrapper">

                                                                    <form method="post" encType="multipart/form-data">
                                                                        <div className="modal-header">
                                                                            <span>Document upload</span>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <label htmlFor="void_cheques">Please upload your <strong>void cheques</strong>.</label>
                                                                            <input type="file" id="void_cheques" name="void_cheques" accept="pdf" />
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <input type="submit" value="Submit" />
                                                                            <div className="cancel-upload" onClick={this.resetFormElement}>Cancel</div>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_geraldine">
                                                        <div className="doc-status"></div>

                                                        <FontAwesomeIcon icon={faIdCard} />
                                                        <div className="doc-title">IDS</div>
                                                        {/* <div>Doc type: </div> */}
                                                        <div className="req-by">Required by <span>1999-01-01</span></div>
                                                        <div className="modal">
                                                            {/* Modal content */}
                                                            <div className="modal-content">
                                                                <span className="closemodal" onClick={this.resetFormElement}></span>
                                                                <div className="modalwrapper">

                                                                    <form method="post" encType="multipart/form-data">
                                                                        <div className="modal-header">
                                                                            <span>Document upload</span>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <label htmlFor="ids">Please upload your <strong>identity document</strong>.</label>
                                                                            <input type="file" id="ids" name="ids" accept="pdf" />
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <input type="submit" value="Submit" />
                                                                            <div className="cancel-upload" onClick={this.resetFormElement}>Cancel</div>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_geraldine">
                                                        <div className="doc-status"></div>
                                                        <i className="fas fa-house-damage"></i>
                                                        {/* <img src="img/svg/181023-1729.svg" alt=""/>        */}
                                                        <FontAwesomeIcon icon={faHouseDamage} />

                                                        <div className="doc-title">Home Insurance</div>
                                                        {/* <div>Doc type: </div> */}
                                                        <div className="req-by">Required by <span>1999-01-01</span></div>
                                                        <div className="modal">
                                                            {/* Modal content */}
                                                            <div className="modal-content">
                                                                <span className="closemodal" onClick={this.resetFormElement}></span>
                                                                <div className="modalwrapper">

                                                                    <form method="post" encType="multipart/form-data">
                                                                        <div className="modal-header">
                                                                            <span>Document upload</span>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <label htmlFor="home_insurance">Please upload your <strong>Home Insurance</strong> documents.</label>
                                                                            <input type="file" id="home_insurance" name="home_insurance" accept="pdf" />
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <input type="submit" value="Submit" />
                                                                            <div className="cancel-upload" onClick={this.resetFormElement}>Cancel</div>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_geraldine">

                                                        <div className="doc-status"></div>
                                                        {/* <i className="fas fa-file-invoice"></i> */}
                                                        <i className="fas fa-percent"></i>
                                                        {/* <img src="img/svg/181023-1723.svg" alt="" />        */}
                                                        <FontAwesomeIcon icon={faPercent} />
                                                        <div className="doc-title">Propriety Tax Bill</div>
                                                        {/* <div>Doc type: </div> */}
                                                        <div className="req-by">Required by <span>1999-01-01</span></div>
                                                        <div className="modal">
                                                            {/* Modal content */}
                                                            <div className="modal-content">
                                                                <span className="closemodal" onClick={this.resetFormElement}></span>
                                                                <div className="modalwrapper">

                                                                    <form method="post" encType="multipart/form-data">
                                                                        <div className="modal-header">
                                                                            <span>Document upload</span>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <label htmlFor="prop_tax_bill">Please upload your <strong>Property Tax Bill</strong>.</label>
                                                                            <input type="file" id="prop_tax_bill" name="prop_tax_bill" accept="pdf" />
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <input type="submit" value="Submit" />
                                                                            <div className="cancel-upload" onClick={this.resetFormElement}>Cancel</div>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="n_geraldine others">
                                                        <div className="doc-status "></div>
                                                        <i className="fas fa-file-alt"></i>

                                                        <FontAwesomeIcon icon={faFileAlt} />
                                                        {/* <img src="img/svg/181024-1005.svg" alt="" />        */}
                                                        <div className="doc-title">Other</div>

                                                        {/* <div>Doc type: </div> */}
                                                        <div className="req-by">Required by <span>1999-01-01</span></div>
                                                        <div className="modal" id="id01">
                                                            {/* Modal content */}
                                                            <div className="modal-content">
                                                                <span className="closemodal"></span>
                                                                <div className="modalwrapper">

                                                                    <form method="post" encType="multipart/form-data">
                                                                        <div className="modal-header">
                                                                            <span>Upload your document</span>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <label htmlFor="otherdocs">Please upload any <strong>any other documents</strong></label>
                                                                            <input type="file" id="otherdocs" name="otherdocs" accept="pdf" />
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <input type="submit" value="Submit" />
                                                                            <div className="cancel-upload">Cancel</div>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Dan;