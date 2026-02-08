import Reaction from "../../__molecules/reaction/reaction"
import Memory from "../../__molecules/memory/memory"
import Verbal from "../../__molecules/verbal/verbal"
import Visual from "../../__molecules/visual/visual"

function Boxes() {
    return <>
    <div className="results">
        <Reaction />
        <Memory />
        <Verbal />
        <Visual />
    </div>
    </>
    
}

export default Boxes;