function main() {
    let path = window.location.pathname
    let all_ids = ['nav-projects', 'nav-about', 'nav-posts']
    let index = 2;
    if (path.includes('project')) {
        index = 0
    } else if (path.includes('about')) {
        index = 1
    } else {
        index = 2
    }
    all_ids.forEach(function (id, ind) {
        let elm;
        if (ind == index) {
            elm = document.getElementById(id)
            if (elm)
                elm.className = 'active-link'
        } else {
            elm = document.getElementById(id)
            if (elm)
                elm.className = ''
        }
    })


    var style = document.createElement('style');
    style.innerHTML = `
    a:visited {
    color: #00a;
    }
    `;
    if (location.href.includes('127.0.0.1')) {
        document.head.appendChild(style);
    }

}


window.onload = main