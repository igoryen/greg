import "../../src/styles/tadni.scss"
import { Link } from 'react-router-dom';
const Tadni = (prop) => {
    const people = [
        {
            "slug": "ab",
            "name": "Alyona B.",
            "active": true
        },
        {
            "slug": "af",
            "name": "Angela F.",
            "active": true
        },
        {
            "slug": "ag",
            "name": "Artyom G.",
            "active": false
        },
        {
            "slug": "as",
            "name": "as",
            "active": false
        },
        {
            "slug": "dc",
            "name": "Dima C.",
            "active": true
        },
        {
            "slug": "dk",
            "name": "Dima K.",
            "active": false
        },
        {
            "slug": "gb",
            "name": "Greg B.",
            "active": true
        },
        {
            "slug": "gk",
            "name": "GK",
            "active": false
        },
        {
            "slug": "gp",
            "name": "Galja P.",
            "active": true
        },
        {
            "slug": "ic",
            "name": "Inna C.",
            "active": false
        },
        {
            "slug": "ih",
            "name": "Illia H.",
            "active": true
        },
        {
            "slug": "ik",
            "name": "Ivan K.",
            "active": true
        },
        {
            "slug": "im",
            "name": "Ivan M.",
            "active": false
        },
        {
            "slug": "ip",
            "name": "Igor P.",
            "active": true
        },
        {
            "slug": "is",
            "name": "IS",
            "active": false
        },
        {
            "slug": "mg",
            "name": "Mike G.",
            "active": false
        },
        {
            "slug": "ml",
            "name": "Maria L.",
            "active": true
        },
        {
            "slug": "ms",
            "name": "MS",
            "active": false
        },
        {
            "slug": "os",
            "name": "OS",
            "active": false
        },
        {
            "slug": "ot",
            "name": "Olena T.",
            "active": true
        },
        {
            "slug": "rp",
            "name": "Ruslan P.",
            "active": true
        },
        {
            "slug": "sb",
            "name": "Svetlana B.",
            "active": true
        },
        {
            "slug": "ss",
            "name": "Svetlana S.",
            "active": false
        },
        {
            "slug": "st",
            "name": "ST",
            "active": false
        },
        {
            "slug": "vk",
            "name": "Victoria K.",
            "active": false
        },
        {
            "slug": "yk",
            "name": "YK",
            "active": false
        },
        {
            "slug": "ym",
            "name": "Yana M.",
            "active": true
        }
    ];
    // Filter active and inactive people
    const activePeople = people.filter(person => person.active);
    const inactivePeople = people.filter(person => !person.active);


    return (
        <section id="tadni">
            <h1>ppl</h1>

            {/* Active Students List */}
            <div>
                <h2>active</h2>
                <ol>
                    {activePeople.map((person) => (
                        <li key={person.slug}>
                            <Link to={`/student/${person.slug}`}>
                                {person.slug} <i>({person.name})</i>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Inactive Students List */}
            <div>
                <h2>inactive</h2>
                <ol>
                    {inactivePeople.map((person) => (
                        <li key={person.slug}>
                            <Link to={`/student/${person.slug}`}>
                                {person.slug} <i>({person.name})</i>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Tadni;