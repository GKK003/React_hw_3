import Empty from "../../../assets/iconoir_eye-empty.svg"

function Visual() {
    return <>
    <div className="visual_div">
            <div className="flex">
              <img src={Empty} alt="empty eye" />
              <h1 className="visual_text">Visual</h1>
            </div>
            <div className="flex">
              <p className="score">73</p>
              <p className="outof">/ 100</p>
            </div>
          </div>
    </>
}

export default Visual;