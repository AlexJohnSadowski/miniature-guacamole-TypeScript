import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const BlogDetails = () => {
    const { id }: any = useParams()
    const { data } : {data: any} = useFetch("http://localhost:3004/blogs/" + id)
    return (
        <div>
           {data && 
           <div>
               {data.title}
                {data.body}
           </div>
           } 
        </div>
    )
}

export default BlogDetails
