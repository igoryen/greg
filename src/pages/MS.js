import "../styles/fc.scss";
import React from "react";

class MS extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Mykola Stepan</h1>
                <section className="tom">
                    <p><a href="/ms12" rel="noopener noreferrer">Lesson 12</a><span>2025-03-30 (Sun)</span></p>
                    <p><a href="/ms11" rel="noopener noreferrer">Lesson 11</a><span>2025-03-25 (Tue)</span></p>
                    <p><a href="/ms10" rel="noopener noreferrer">Lesson 10</a><span>2025-03-18 (Tue)</span></p>
                    <p><a href="/ms09" rel="noopener noreferrer">Lesson 9</a><span>2025-03-16 (Sun)</span></p>
                    <p><a href="/ms06" rel="noopener noreferrer">Lesson 6</a><span>2025-03-09 (Sun)</span></p>
                </section>
            </div>
        );
    }
}

export default MS;