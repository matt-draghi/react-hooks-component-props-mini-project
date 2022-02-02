function Article({title, date="January 1, 1970", preview, minutes}){
    return(
        <article>
            <h3>{title}</h3>
            <small>
                {date}
                <span>
                    {/* TODO: Add bonus feature 'Minutes to Read' ☕️ */}
                    {/* Placeholder */}
                    {` ☕️ ${minutes} min read`}
                </span>
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article