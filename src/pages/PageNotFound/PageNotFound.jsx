import pageNotfound from '../../assets/404.gif';
function PageNotFound() {
    return (
        <div className='flex justify-center items-center py-20'>
            <img className='rounded-md' src={pageNotfound} alt="" />
        </div>
    )
}

export default PageNotFound;