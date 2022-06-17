import './App.scss';

function App() {
    return (
        <div className="App">
            <main>
                <section className="no-parallax">
                    <h1>Fun fact:</h1>
                </section>
                <section className="parallax bg1">

                    <div className='parallax bg2'>

                        <div className='parallax bg3'>
                            <h1>Hello</h1>
                        </div>

                    </div>
                    { // <h1>The sound that occurs when you snap your fingers is made by your middle finger hitting your palm!</h1> 
                    }
                </section>
                <section className="no-parallax">
                    <h1>Have a nice day!</h1>
                </section>
            </main>
        </div>
    );
}

export default App;
