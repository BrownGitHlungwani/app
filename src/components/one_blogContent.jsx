import { useParams } from "react-router-dom";
import { Blog_grid } from "./Data/blog_grid";

export function OneBlog(){
    const {id} = useParams();
    const blogContent = Blog_grid.find((item) => item.id === parseInt(id));
    return(
        <div className="Oneblog_content">
            <h1>{blogContent.name}</h1>
            <h3>{blogContent.agent}</h3>
            <p>{blogContent.definition}</p>
            <p>
                {
                blogContent.types.map(detailedDesc=> {
                        return <ul><li>{detailedDesc}</li></ul>
                    })
                }
            </p>
        </div>
    );
}