import Article from "./Article"

function ArticleList({posts}){
    return(
        <main>
            {posts.map(post => { 
                return (
                <Article 
                    key={post.id} 
                    id={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    minutes={post.minutes} 
                />
                )
            })}
        </main>
    )
}

export default ArticleList