// Modern React: functional components e.g.) hooks

// <> Empty fragment, just a wrapper.
// code . -> open up vscode.  
// <label htmlFor=""></label>

// iterating through the map() function requries
// a key for each child element <li>

// use of ternary operator within {} curly brackets.
// 1) {condition ? true_body : false_body}
// 2) {conditoin && true_body}

function App() {

    const title = "Blog Post";
    const body = "This is my blog post.";
    const comments = [
        {id: 1, text: "Comment one"},
        {id: 2, text: "Comment two"},
        {id: 3, text: "Comment three"},
        {id: 4, text: "Comment four"}
    ];

    const loading = false;
    if (loading) return <h1>Loading...</h1>


    const showComments = true;

    // jsx variable 'commentBlock'
    const commentBlock = (
            <div className='comments'>
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment, index)=> (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>)

    return (
        <div className='container'>
            <h1>{title}</h1>
            <p>{body}</p>

            {showComments && commentBlock}

            
        </div>
    )
}


export default App;
