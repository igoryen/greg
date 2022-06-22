import "../styles/Home/home.scss"
import "../styles/Home/eye-track.scss"
import myResume from "../cv/igoryen-resume.pdf"
const HomePage = () => {

    const Items = [
        {
            id: 'dd264b69f8362ee106f25f11b13a46f7',
            title: "Emblica",
            desc: "a React app to learn English",
            link: "https://emblica.herokuapp.com/",
            date: "2020",
            image: "emblica.png",
            for: "my wife",
        },
        {
            id: '6b2985034a01f2fcf9d2836a2dec12e1',
            title: "Dragonfruit",
            desc: "a React app to learn Spanish",
            link: "https://dragonfruit.herokuapp.com/",
            date: "2020",
            image: "dragonfruit.png",
            for: "myself",
        },
        {
            id: '16db7ef414f27c5d54ce976c7710695a',
            title: "Expensify",
            desc: "a React app",
            link: "https://igoryen-expensify.herokuapp.com/",
            date: "2020",
            image: "expensify.png",
            for: "myself",
        },
        {
            id: '18fe7347ac4e04e020d963ce0a1a060d',
            title: "NAS Mobile App",
            desc: "UI by me",
            link:
                "https://apps.apple.com/ca/app/valuation-mobile-app/id536228581#?platform=iphone",
            date: "2019",
            image: "nas.png",
            for: "the Nationwide Group",
        },
        {
            id: '7399d3d109ecf848fb597ffe14fa8101',
            title: "CNX",
            desc: "Brochure website",
            link: "https://www.connexionssoftware.com/",
            date: "2019",
            image: "cnx.png",
            for: "the Nationwide Group",
        },
        {
            id: '3cf3d57a138fb0d0aba3e9eb42582dce',
            title: "NRS",
            desc: "Brochure site, bilingual",
            link: "https://www.nwrs.ca/",
            date: "2018",
            image: "nrs.png",
            for: "the Nationwide Group",
        },
        {
            id: '404bb491f26ee6cbdf99e19d4b031c42',
            title: "HCS",
            link: "https://nwhcs.ca/",
            desc: "Static website, improved by me (WIP)",
            date: "2018",
            image: "hcs.png",
            for: "the Nationwide Group",
        },
        {
            id: 'a1de9672c054b2c64b78186bce19a639',
            title: "NAS",
            link: "https://www.nationwideappraisals.com/NAS/index.jsp",
            desc: "Multiple pages, design implementation",
            date: "2018",
            image: "nas-site.png",
            for: "the Nationwide Group",
        },
        {
            id: '41db778118898f2eab767fbfde3bff48',
            title: "Lexus.ca",
            desc: "Multiple pages, design implementation",
            link: "https://www.lexus.ca/lexus/en",
            date: "2015-2016",
            image: "lexus.png",
            for: "Saatchi & Saatchi",
        },
        {
            id: 'c4a3a9d6ffe80616f3ba1c95b68fe81b',
            title: "Toyota.ca",
            desc: "Multiple pages, design implementation",
            link: "https://www.toyota.ca/toyota/en/",
            date: "2015-2016",
            image: "toyota.png",
            for: "Saatchi & Saatchi",
        },
        {
            id: '80fcc9264ecdb6e0287699b4c43b3e53',
            title: "Mozilla Webmaker",
            desc: "Localization, backend",
            link: "https://foundation.mozilla.org/en/artifacts/webmaker/",
            date: "2013",
            image: "mozilla-webmaker.jpg",
            for: "Mozilla",
        },
        {
            id: '3befde5a4ab44fecf9d926b3643b5870',
            title: "Github",
            desc: "My github account",
            link: "https://github.com/igoryen",
            date: "since 2013",
            image: "github.png",
        },
        // {
        //     id: ,
        //     title: "",
        //     desc: "",
        //     link: "",
        //     date: "",
        // },
    ];
    return (
        <section className="main home">
            <div className="hello">

                <div className="photo">
                    <div className="photo-image"></div>
                </div>
                <h1>Hi!</h1>
                <h2>igoryen here.</h2>
                <p>
                    Feel free to
                    <a className="download-stuff" href={myResume} target="_blank" rel="noreferrer">download &#x1F4E5; my resume</a>
                    and check out my frontend projects below.
                </p>
                <p></p>
            </div>


            <div className="proj-list-container eye-track-area">
                <div className="eye-track"></div>

                {Items.map(item => (
                    <a className="proj-list-card" href={item.link} target="_blank" rel="noreferrer" key={item.id}>
                        <div className="bkgimg"
                            style={{
                                backgroundImage: `url( ${require(`../../public/images/home/${item.image}`)}`
                            }}></div>
                        <div className="info">
                            <h2>
                                <span>{item.title}</span>
                            </h2>
                            <div>
                                <span>{item.desc}</span>
                            </div>
                            <div v-if="item.for">
                                <span>For: {item.for}</span>
                            </div>
                            <div>
                                <span>{item.date}</span>
                            </div>
                        </div>
                        {item.title}
                    </a>
                ))}
            </div>
        </section>
    );
}

export default HomePage;