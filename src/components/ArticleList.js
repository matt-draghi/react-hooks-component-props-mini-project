import Article from "./Article"

function ArticleList({articles}){
    return(
        <main>
            {articles.map(article => {
                return (
                <Article key={article.id} article={article}/>
                )
            })}
        </main>
    )
}

export default ArticleList