import Brain from "../../../assets/iconoir_brain.svg"
function Memory() {
    return <>
    <div class="memory_div">
            <div class="flex">
              <img src={Brain} alt="brain" />
              <h1 class="memory">Memory</h1>
            </div>

            <div class="flex">
              <p class="score">92</p>
              <p class="outof">/ 100</p>
            </div>
          </div></>
}

export default Memory;