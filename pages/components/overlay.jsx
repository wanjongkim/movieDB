import YoutubeEmbed from "./embedVideo";

const Overlay = ({embedId, setShowMovie}) => {
    return (
        <>
            <div className="fixed top-0 left-0 bg-black opacity-70 z-10 w-screen h-screen">
            </div>
            <div className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center">
                <YoutubeEmbed width="1068px" height="628" embedId={embedId} setShowMovie={setShowMovie}/>       
            </div>
        </>        
    );
}

export default Overlay;