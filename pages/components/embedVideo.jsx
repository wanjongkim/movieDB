const YoutubeEmbed = ({ embedId, width, height, setShowMovie }) => {
    return (
        <div className="flex flex-col relative">
            <button onClick={() => setShowMovie(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute -top-10 right-0 w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>  
            </button>  
            <iframe
            width={width}
            height={height}
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className="relative"
            />
            
            
        </div>
    );
};

export default YoutubeEmbed;