import { Accordion, Card } from "react-bootstrap";

function ModelBattles(props) {
    const isLoose =    "The number of enemies we were facing was much higher than our preliminary estimates. Their fleet was far larger and better organized than we had imagined, which posed significant challenges throughout the conflict. The enemy fighter squadrons were particularly formidable, managing to eliminate a significant portion of our fighters and disrupt our formations";
    const isWin = "From the outset, our forces were met with a formidable adversary, equipped with advanced technology and intricate battle formations. However, our relentless dedication to innovation and preparedness allowed us to swiftly adapt to their tactics. Our engineers had devised upgraded energy-based weaponry, which proved highly effective against the enemy's sophisticated shielding systems."  
    let text = "";
    let issues = "";
 let attacker ="";
    if (props.is_defender == 0){
        attacker = `You fight the planet ${props.planet}`;
    }
    else {
        attacker = ` The planet ${props.planet} attack you `;
    }

  if ( props.loose > props.win){
    issues = `And..... You Fail 🪦`;
    text = isLoose;
  }
  else {
    issues = `And..... You Win! 😌`;
    text = isWin;
  }

  return (
    <Accordion.Item eventKey={props.id}>
      <Accordion.Header>
      👨‍🚀 {attacker}   {issues}
      </Accordion.Header>
      <Accordion.Body>
        <Card> <span> <strong>Fighters left : </strong> {props.nb_fighter} | <strong> Frigates left : </strong>{props.nb_frigate}  |  <strong>Cruisers left : </strong> {props.nb_cruiser} |  <strong> Destroyers left : </strong>{props.nb_destroyer}</span></Card>

        {text}
      </Accordion.Body>
    </Accordion.Item>
  );
}
export default ModelBattles;
