import MovieNavTemplate from "../components/movieNavTemplate"

const Popular = (props) => {
    return (
        <MovieNavTemplate title="Popular Movies" data={props.popular}/>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`${process.env.API_PATH}/api/popular`)
    const popular = await data.json();

    return {
        props: {
            popular
        }
    }
}

export default Popular;