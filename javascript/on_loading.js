// iframe load

const iframe = Array.from(document.querySelectorAll('iframe'))

function iframeLoad() {
    iframe.forEach(item => {
        item.setAttribute('src', item.getAttribute('data-src'))
    })
}

window.onload = iframeLoad

// loading screen 
const preLoading = document.querySelector('.on-loading')

window.addEventListener('load', () => {
        preLoading.parentElement.removeChild(preLoading)
})
