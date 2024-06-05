function Comment({id, name, comment, timestamp}) {
    return (
        <div className="comments__item">
                <div className="comments__avatar--grey">

                </div>
                <div className="comments__item-details">
                    <div className="comments__item-info">
                        <p className="comments__item-name">{name}r</p>
                        <p className="comments__item-text">{timestamp}</p>
                    </div>
                    <p className="comments__item-text">{comment}</p>

                </div>

        </div>
    )
}

export default Comment