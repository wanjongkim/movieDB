import MovieNavTemplate from "../components/movieNavTemplate"

const Upcoming = (props) => {
    return (
        <MovieNavTemplate title="Upcoming Movies" data={props.upcoming}/>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`${process.env.API_PATH}/api/upcoming`)
    const upcoming = await data.json();

    return {
        props: {
            upcoming
        }
    }
}

export default Upcoming;