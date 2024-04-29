const getCroppedImageUrl = (url: string)=>{
    if(!url) return "";
const target = 'media/'
const index = url.indexOf(target) + target.length
const cropDimensions = 'crop/600/400/'
return url.slice(0, index) + cropDimensions + url.slice(index)


}

export default getCroppedImageUrl