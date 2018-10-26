import React, {Component} from 'react';
import './Leaf.css';
import YouTube from 'react-youtube';
import {Image} from "react-bootstrap";

class Leaf extends Component {
  // constructor(props){
    // super();
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
        <div>
            <h3>Alice in Wonderland </h3>
            <p>Alice is sitting with her sister outdoors when she spies a White Rabbit with a pocket watch. Fascinated by the sight,
                she follows the rabbit down the hole. She falls for a long time, and finds herself in a long hallway full of doors.
                There is also a key on the table, which unlocks a tiny door; through this door, she spies a beautiful garden.
                She longs to get there, but the door is too small. Soon, she finds a drink with a note that asks her to drink it.
                There is later a cake with a note that tells her to eat; Alice uses both, but she cannot seem to get a handle on things,
                and is always either too large to get through the door or too small to reach the key. While she is tiny, she slips and
                falls into a pool of water.
                <Image src="img/thumbnaildiv.png" rounded />
                She realizes that this little sea is made of tears she cried while a giant. She swims to
                shore with a number of animals, most notably a sensitive mouse, but manages to offend everyone by talking about her
                cat's ability to catch birds and mice. Left alone, she goes on through the wood and runs into the White Rabbit.

                <Image src="img/alice.gif" rounded />
                He mistakes her for his maid and sends her to fetch some things from his house. While in the White Rabbit's home,
                she drinks another potion and becomes too huge to get out through the door. She eventually finds a little cake which,
                when eaten, makes her smaIn the wood again, she comes across a Caterpillar sitting on a mushroom. He gives her some
                valuable advice, as well as a valuable tool: the two sides of the mushroom, which can make Alice grow larger and
                smaller as she wishes.

                <YouTube
                    videoId="Q93VrYOXSe8"
                    className="row"
                />
                The first time she uses them, she stretches her body out tremendously. While stretched out,
                she pokes her head into the branches of a tree and meets a Pigeon. The Pigeon is convinced that Alice is a serpent,
                and though Alice tries to reason with her the Pigeon tells her to Alice gets herself down to normal proportions and
                continues her trek through the woods. In a clearing she comes across a little house and shrinks herself down enough
                to get inside. It is the house of the Duchess; the Duchess and the Cook are battling fiercely, and they seem unconcerned
                about the safety of the baby that the Duchess is nursing. Alice takes the baby with her, but the child turns into a
                pig and trots off into the woods. Alice next meets the Cheshire cat (who was sitting in the Duchess's house, but said
                nothing). The Cheshire cat helps her to find her way through the woods, but he warns her that everyone she meets will
                Alice goes to the March Hare's house, where she is treated to a Mad Tea Party. Present are the March Hare, the Hatter,
                and the Dormouse. Ever since Time stopped working for the Hatter, it has always been six o'clock; it is therefore always
                teatime. The creatures of the Mad Tea Party are some of the must argumentative in all of Wonderland. Alice leaves them and
                finds a tree with a door in it: when she looks through the door, she spies the door-lined hallway from the beginning of her
                adventures. This time, she is prepared, and she manages to get to the lovely garden that she saw earlier. She walks on
                through, and finds herself in the garden of the Queen of Hearts. There, three gardeners (with bodies shaped like playing
                cards) are painting the roses red. If the Queen finds out that they planted white roses, she'll have them beheaded. The
                Queen herself soon arrives, and she does order their execution; Alice helps to hide them in a larThe Queen invites Alice
                to play croquet, which is a very difficult game in Wonderland, as the balls and mallets are live animals. The game is
                interrupted by the appearance of the Cheshire cat, whom the King of Hearts immediateThe Queen takes Alice to the Gryphon,
                who in turn takes Alice to the Mock Turtle. The Gryphon and the Mock Turtle tell Alice bizarre stories about their school
                under the sea. The Mock Turtles sings a melancholy song about turtle soup, and soon afterward the Gryphon drags Alice off
                to see the trial of the Knave The Knave of Hearts has been accused of stealing the tarts of the Queen of Hearts, but the
                evidence against him is very bad. Alice is appalled by the ridiculous proceedings. She also begins to grow larger. She
                is soon called to the witness stand; by this time she has grown to giant size. She refuses to be intimidated by the bad
                logic of the court and the bluster of the King and Queen of Hearts. Suddenly, the cards all rise up and attack her, at
                which point she wakes up. Her adventures in Wonderland have all been a fantastic dream</p>
        </div>


    );
  }
}

export default Leaf;
