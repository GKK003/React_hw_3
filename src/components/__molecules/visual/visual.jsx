import Empty from "../../../assets/iconoir_eye-empty.svg"

function Visual() {
    return <>
    <div class="visual_div">
            <div class="flex">
              <img src={Empty} alt="empty eye" />
              <h1 class="visual_text">Visual</h1>
            </div>
            <div class="flex">
              <p class="score">73</p>
              <p class="outof">/ 100</p>
            </div>
          </div>
    </>
}

export default Visual;