import noImage from '../assets/no-image-placeholder.webp'

function ImageResizer ( url:string) {
    if (!url) return noImage
    let target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)

}

export default ImageResizer