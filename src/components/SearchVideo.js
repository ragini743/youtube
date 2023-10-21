const SearchVideo = ({r}) =>{
    console.log("s",r)
    const {snippet} = r
   const {title,publishedAt,thumbnails,} =snippet;
   return(
<div className="cursor-pointer border-2 border-black w-full">
    
<div className="w-full"><img classNamew-full src={thumbnails.high.url} alt="video"></img></div>
<h1 className="overflow-hidden px-2">{title}</h1>
<h2 className="px-2 pb-2">published {publishedAt}</h2>
</div>
    )
}
export default SearchVideo;