import Chat from "../../../assets/iconoir_chat-remove.svg"

function Verbal() {
    return<>
    <div className="verbal_div">
            <div className="flex">
              <img src={Chat} alt="chat remove" />
              <h1 className="verbal_text">Verbal</h1>
            </div>
            <div className="flex">
              <p className="score">61</p>
              <p className="outof">/ 100</p>
            </div>
          </div>
    
    </>
}

export default Verbal;