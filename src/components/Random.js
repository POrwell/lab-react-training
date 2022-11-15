function Random({min, max}) {
    return (
<div>
<p className="Random">Random value between {min} and {max} = {Math.floor(Math.random()*(max - min) + min)}</p>
</div>
    )}
    

export default Random;