import Brain from "../../../assets/iconoir_brain.svg"
function Memory() {
    return <>
    <div className="memory_div">
            <div className="flex">
              <img src={Brain} alt="brain" />
              <h1 className="memory">Memory</h1>
            </div>

            <div className="flex">
              <p className="score">92</p>
              <p className="outof">/ 100</p>
            </div>
          </div></>
}

export default Memory;