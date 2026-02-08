import Flash from "../../../assets/iconoir_flash.svg"

function Reaction() {
    return<>
     <div class="reaction">
            <div class="flex">
              <img src={Flash} alt="flash" />
              <h1 class="React_text">Reaction</h1>
            </div>

            <div class="flex">
              <p class="score">80</p>
              <p class="outof">/ 100</p>
            </div>
          </div>
    </>
}

export default Reaction;