import TopNav from "../components/topNav";

const Movie = () => {
    return (
        <div>
            <TopNav />
            <div className="flex h-80 bg-slate-100" >
                <img src="" alt="img" />
            </div>
        </div>
    )
}

export default Movie;

export async function getServerSideProps(context) {
    const {params} = context;
    const {id} = params;
    return {
        props: {

        }
    }
}