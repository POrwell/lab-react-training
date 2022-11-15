function Greetings({children, lang}) {
     return (
<div>
{(lang === "de") && <p className="Greeting">Hallo {children}</p>}
{(lang === "fr") && <p className="Greeting">Bonjour {children}</p>}
</div>
     )}
     

     export default Greetings;