import "./Banner.css"

function Banner() {
    return <section className="banner">
                <img src="/img/banner.png" alt="banner"/>
                <div className="Subbanner">
                    <div className="Subbanner_1">
                        <h1>Challenge React</h1>
                        <p>Este challenge es una forma de aprendizaje. 
                        Es un mecanismo donde podrás comprometerte 
                        en la resolución de un problema para poder 
                        aplicar todos los conocimientos adquiridos 
                        en la formación React.</p>
                    </div>
                    <div className="Subbanner_2">
                        <img src="/img/player.png" alt="foto"/>
                    </div>                    
                </div>
                
           </section>
}

export default Banner