import Chat from "../../../assets/iconoir_chat-remove.svg"

function Verbal() {
    return<>
    <div class="verbal_div">
            <div class="flex">
              <img src={Chat} alt="chat remove" />
              <h1 class="verbal_text">Verbal</h1>
            </div>
            <div class="flex">
              <p class="score">61</p>
              <p class="outof">/ 100</p>
            </div>
          </div>
    
    </>
}

export default Verbal;