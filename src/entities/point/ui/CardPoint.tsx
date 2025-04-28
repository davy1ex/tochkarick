import "./CardPoint.css"

export const CardPoint = ({ street, index, handleBookmark, handleClose }) => {
    return (
        <div className="cardPointWrapper">
            <div className="textContainer">
                <div className="textAboutPoint">
                    <h1>Point Generated!</h1>
                    <div className="buttonBookmark" onClick={handleBookmark}>
                        🔖
                    </div>
                    {/* <p>{index}</p> */}
                </div>
                <p>{street}</p>

            </div>

            <div className="buttonClose" onClick={handleClose}>
                <button>Start Journey</button>
            </div>
            <div className="buttonClose" onClick={handleClose}>
                <button>Create report</button>
            </div>
            <div className="buttonClose" onClick={handleClose}>
                <button>Close</button>
            </div>


        </div>
    )
}