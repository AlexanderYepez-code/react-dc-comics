import comics from "../assets/comics"
import ComicsCard from "./ComicsCard"
export default function ComicsList() {
    return (
        comics.map((curComics) => (
            <ComicsCard
                image={curComics.thumb}
                title={curComics.series}
                price={curComics.price}
                number={curComics.id} />


        ))
    )
}
