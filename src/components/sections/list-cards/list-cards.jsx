
import Card from "../../common/card/card";
import ContentItem from "../../common/content-item/content-item";
import "./list-cards.scss";

const ListCards = ({
    cardInfo = [],
    id="",
}) => {
    return (
        <div className="info-cards-container" id={id}>
            {cardInfo.map((el, i) => (
                <Card 
                    key={i}
                    className="info-cards"
                >
                    <ContentItem 
                        img={el.img}
                        description={el.description}
                        title={el.title}
                    />
                </Card>
            ))}
        </div>
    )
}

export default ListCards;