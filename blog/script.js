const createMain = document.querySelector('#create_main')
const createButton = document.querySelector('#btn_open')
const closes = document.querySelector('.create_close')

const postAuthor = document.querySelector('#author')
const postHeader = document.querySelector('#header')
const postContent = document.querySelector('#post_content')

const container = document.querySelector('.container')

class Post{
    constructor(author, header, content){
        this.author = author
        this.header = header
        this.content = content
    }

    getAuthor(){
        console.log(this.Author)
        return this.author
    }

    getHeader(){
        return this.header
    }

    getContent(){
        return this.content
    }
}

createButton.onclick = function () {
    createMain.style.display = 'block';
};

closes.onclick = function (event) {
    createMain.style.display = 'none';
    
    console.log(postAuthor.textContent)
    let post = new Post(postAuthor.textContent, postHeader.innerHTML, postContent.innerHTML)

    event.preventDefault()
    container.insertAdjacentHTML("beforeend", `
        <div class="post">
            <h1 class="post_header">header</h1>
            <p class="post_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt, non repudiandae obcaecati corrupti iusto nisi nesciunt. Doloremque dolor fugiat pariatur autem nesciunt vitae quam, quis perspiciatis obcaecati, laudantium earum.</p>
            <p class="post_author">${post.getAuthor()}</p>
            <button class="post_button">Подробнее...</button>
        </div>
    `)
};

window.onclick = function (event) {
    if (event.target == createMain) {
      createMain.style.display = 'none';
    }
};

