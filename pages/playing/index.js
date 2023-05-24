import MovieNavTemplate from "../../components/movieNavTemplate"

const Playing = (props) => {
    return (
        <MovieNavTemplate title="Now Playing Movies" data={props.playing} type="playing"/>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`${process.env.API_PATH}/api/playing?page=1`)
    const playing = await data.json();

    return {
        props: {
            playing
        }
    }
}

export default Playing;