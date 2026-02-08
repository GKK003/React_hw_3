import SecHeading from "../../__molecules/heading/secheading";
import Boxes from "../boxes/boxes";
import Button from "../../__molecules/button/button";

function BoxDiv() {
    return <>
    <div className="white_box">
        <SecHeading />
        <Boxes />
        <Button />
    </div>
    </>
    
}

export default BoxDiv;