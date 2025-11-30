import "../../src/styles/tadni.scss"
import { Link } from 'react-router-dom';
const Tadni = (prop) => {
    const people = [
        {
            "slug": "ab",
            "name": "Alyona B.",
            "active": false
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
            "slug": "ax",
            "name": "Andrew S.",
            "active": true
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
            "name": "Inna S.",
            "active": false
        },
        {
            "slug": "jg",
            "name": "Julia G.",
            "active": false
        },
        {
            "slug": "kz",
            "name": "Kate Z.",
            "active": true
        },
        {
            "slug": "mg",
            "name": "Mike G.",
            "active": false
        },
        {
            "slug": "ml",
            "name": "Maria L.",
            "active": false
        },
        {
            "slug": "ms",
            "name": "Mykola S.",
            "active": false
        },
        {
            "slug": "np",
            "name": "Natalia P.",
            "active": false
        },
        {
            "slug": "ol",
            "name": "Olga L.",
            "active": false
        },
        {
            "slug": "os",
            "name": "Oleksii S.",
            "active": false
        },
        {
            "slug": "ot",
            "name": "Olena T.",
            "active": false
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
            "name": "Sana T.",
            "active": false
        }, 
        {
            "slug": "tb",
            "name": "Tatiana B.",
            "active": true
        },
        {
            "slug": "va",
            "name": "Vitalii A.",
            "active": true
        },
        {
            "slug": "vh",
            "name": "Vlada K.",
            "active": false
        },
        {
            "slug": "vk",
            "name": "Valeria K.",
            "active": false
        },
        {
            "slug": "vv",
            "name": "Vitaly V.",
            "active": false
        },
        {
            "slug": "yk",
            "name": "Yana K.",
            "active": false
        },
        {
            "slug": "ym",
            "name": "Yana M.",
            "active": false
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
                            <Link to={`/student/${person.slug}`} target="_blank" rel="noopener noreferrer">
                                <pre>{person.slug}</pre> <i>({person.name})</i>
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
                            <Link to={`/student/${person.slug}`} target="_blank" rel="noopener noreferrer">
                                <pre>{person.slug}</pre> <i>({person.name})</i>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Tadni;