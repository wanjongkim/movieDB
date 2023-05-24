import MovieNavTemplate from "../../components/movieNavTemplate"

const Upcoming = (props) => {
    return (
        <MovieNavTemplate title="Upcoming Movies" data={props.upcoming} type="upcoming"/>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`${process.env.API_PATH}/api/upcoming?page=1`)
    const upcoming = await data.json();

    return {
        props: {
            upcoming
        }
    }
}

export default Upcoming;