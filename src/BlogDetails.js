import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isLoading && <div> Loading...</div> }
            { error && <div>{ error } </div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.author }</p>
                    <p>{ blog.body }</p>
                    <button onClick = {handleDelete}>Delete Blog</button>
                </article>
            )} 
        </div>
    );
}
 
export default BlogDetails;