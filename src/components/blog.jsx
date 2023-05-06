import { Blog_grid } from "./Data/blog_grid";

export function Blog() {

    return(
        <div className="Blogbody">
           <h1>From the blog</h1>
           <h4>Learn about different computer parts and use case.</h4>
           <div className="Blog_gridholder">
              {
                Blog_grid.map(item =>(
                <div>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.alt} width={410} height={250} />
                    <h3>{item.agent}</h3>
                    <p>{item.description}</p>
                </div>
              ))}
            </div>
        </div>
    );
}