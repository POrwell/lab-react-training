function IdCard({user}) {
    const formattedBirth = user.birth.toString().split(" ").slice(0, 4).join(" ");
    const heightString = user.height.toString()
    const formattedHeight = heightString.slice(0, 1) + "." + heightString.slice(1) + "m";
     return (
<div className="IdCard">
<p className="Name">First name: {user.firstName}</p>
<p className="Last-name">Last name: {user.lastName}</p>
<p className="Gender">Gender: {user.gender}</p>
<p className="Height">Height: {formattedHeight}</p>
<p className="Birth">Birth: {formattedBirth}</p>
<img className="Image" src={user.picture} alt="user"/>
</div>
     )}

     export default IdCard;
