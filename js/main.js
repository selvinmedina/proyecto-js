$(function () {

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true,
    });

    // Posts
    var posts = [
        {
            title: 'Prueba de titulio 1',
            date: 'Publicado el dia ' + new moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt repellat facilis eoseveniet nostrum quidem ratione, cumque vero necessitatibus explicabo voluptatem architectodignissimos magnam? Mollitia facere culpa laborum molestiae.'
        },
        {
            title: 'Prueba de titulio 2',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt repellat facilis eoseveniet nostrum quidem ratione, cumque vero necessitatibus explicabo voluptatem architectodignissimos magnam? Mollitia facere culpa laborum molestiae.'
        },
        {
            title: 'Prueba de titulio 3',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt repellat facilis eoseveniet nostrum quidem ratione, cumque vero necessitatibus explicabo voluptatem architectodignissimos magnam? Mollitia facere culpa laborum molestiae.'
        },
        {
            title: 'Prueba de titulio 4',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt repellat facilis eoseveniet nostrum quidem ratione, cumque vero necessitatibus explicabo voluptatem architectodignissimos magnam? Mollitia facere culpa laborum molestiae.'
        },
        {
            title: 'Prueba de titulio 5',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt repellat facilis eoseveniet nostrum quidem ratione, cumque vero necessitatibus explicabo voluptatem architectodignissimos magnam? Mollitia facere culpa laborum molestiae.'
        },
        {
            title: 'Prueba de titulio 6',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt repellat facilis eoseveniet nostrum quidem ratione, cumque vero necessitatibus explicabo voluptatem architectodignissimos magnam? Mollitia facere culpa laborum molestiae.'
        },
    ];

    posts.forEach((item, index) => {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>

                <p>${item.content}</p>
                <a href="" class="button-more">Leer mas</a>
            </article>`;
        $('#posts').append(post);
    });

    // Selector de temas
    var theme = $('#theme');
    $('#to-green').click(function(){
        theme.attr('href','css/green.css');
    });

    $('#to-red').click(function(){
        theme.attr('href','css/red.css');
    });

    $('#to-blue').click(function(){
        theme.attr('href','css/blue.css');
    });

    // Scroll arriba de la Web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0,
        },500);
        return false;
    });
});