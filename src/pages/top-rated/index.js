import MovieNavTemplate from "../../components/movieNavTemplate"

const TopRated = (props) => {
    return (
        <MovieNavTemplate title="Top Rated Movies" data={props.topRated} popular="top-rated"/>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`${process.env.API_PATH}/api/top-rated?page=1`)
    const topRated = await data.json();

    return {
        props: {
            topRated
        }
    }
}

export default TopRated;