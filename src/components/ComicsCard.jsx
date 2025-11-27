
export default function ComicsCard(props) {
    const { image, title, price, number } = props;
    return (
        <div className="col " key={number}>
            <img className="comicimg" src={image} alt="" />
            <h4 className="titolo">{title}</h4>
            <p className="prezzo">{price}</p>

        </div>)
}
