export const CardPoint = ({ street, index, handleBookmark, handleClose }) => {
    return (
        <>
            <h1>Point Generated!</h1>
            <div className="buttonBookmark" onClick={handleBookmark}>
                🔖
            </div>
            <div className="buttonClose" onClick={handleClose}>
                ⛔
            </div>
            <p>{street}</p>
            <p>{index}</p>

        </>
    )
}