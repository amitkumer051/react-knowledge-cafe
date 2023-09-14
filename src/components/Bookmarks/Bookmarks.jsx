import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='bg-gray-300 text-center ml-2 mt-6 w-1/3'>
            <div>
                <h3 className='text-3xl p-2'>Reading Time:{readingTime}</h3>
            </div>
            <h2 className='text-2xl mx-2 p-2'>Book Marks :{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.array
};

export default Bookmarks;