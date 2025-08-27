import React from 'react';

const Homepage: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
            <header>
                <h1></h1>
                <p></p>
            </header>
            <main>
                <section>
                    <h2></h2>
                    <p></p>
                </section>
                <section>
                    <h2></h2>
                    <a href="mailto:anderson.yoshiaki@ifpr.edu.br"></a>
                </section>
            </main>
            <footer style={{ marginTop: '20px', fontSize: '0.9em', color: '#555' }}>
                <p>&copy; 2025 Samuel e Murilo Homepage. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;