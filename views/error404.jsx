const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>

                <div>
                    <img src="/images/Rest-Rent2.jpg" alt='dog' />      
                    Photo by <a href="AUTHOR_LINK">Jamei  Street</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
            </main>
        </Def>
    )
      
}

module.exports = error404
