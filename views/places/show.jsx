const React = require('react')
const Def = require('../default')
function show(data) {
  
  return (
    <Def>
      <main>
        {/* {message} */}
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
        <div>
          <h2>Rating</h2>
          {/* {rating} */}
        </div>

        <div>
          <h2>Description</h2>
          <h3>{data.place.showEstablished()}</h3>
          <h4>Serving {data.place.cuisines}</h4>
        </div>

        <div>
          <h2>Comments</h2>
          {/* {comments} */}
        </div>
        <a
          href={`/places/${data.place.id}/comment`}
          className="btn btn-primary btn-block"
        >
          Leave a comment!
        </a>
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete this Place
          </button>
        </form>
      </main>
    </Def>
  );
}


module.exports = show
