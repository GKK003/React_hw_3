import Flash from "../../../assets/iconoir_flash.svg"

function Reaction() {
    return<>
     <div className="reaction">
            <div className="flex">
              <img src={Flash} alt="flash" />
              <h1 className="React_text">Reaction</h1>
            </div>

            <div className="flex">
              <p className="score">80</p>
              <p className="outof">/ 100</p>
            </div>
          </div>
    </>
}

export default Reaction;