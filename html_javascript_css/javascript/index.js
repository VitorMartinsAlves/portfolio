let dev = true
function getter_cdn(asset) {
    if (!dev) {
        return `https://raw.githubusercontent.com/VitorMartinsAlves/pseudo_cdn/main/${asset}`
    }
    return `./resources/${asset}`
}

function updateImageSrc() {
    const imgList = document.querySelectorAll('[data-image]');
    imgList.forEach((img) => {
        const assetName = img.dataset.image;
        img.setAttribute('src', getter_cdn(assetName));
    })
}

window.addEventListener('load', updateImageSrc);
