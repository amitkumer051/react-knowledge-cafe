import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead }) => {
    console.log(blog);
    const { title, cover, author_img, author, post_date, reading_time, hashtag } = blog;
    return (
        <div className='pb-5'>
            <img src={cover} alt={`Title of cover picture ${title}`} />
            <div className='flex justify-between items-cente py-4'>
                <div className='flex'>
                    <img className='w-10 h-10 rounded-full' src={author_img} alt="" />
                    <div className='px-3'>
                        <h2>{author}</h2>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{reading_time} min read </p>
                    <button onClick={() => handleAddToBookmark(blog)}
                        className='text-red-600'><FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>

            <h2 className='text-4xl font-bold pb-3'>{title}</h2>

            <p className='pb-3'>
                {
                    hashtag.map((hash, idx) => <span key={idx}> <a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)}
             className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;