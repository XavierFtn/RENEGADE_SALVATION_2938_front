

function BackgroundVideo() {
    return (
        <div className="video">
            <video autoPlay loop muted id="video"  controls={false} >
                <source src="../src/Components/vid/sfx.mp4" type="video/mp4" />
            </video>
        </div>)
}

export default BackgroundVideo
