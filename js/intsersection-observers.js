$(document).ready( ()=>{
    const introImgs = document.querySelectorAll('.intro-imgs .img');
    const introDescription = document.querySelector('.intro .description');
    

    // setting up the observer
    const io = new IntersectionObserver((entries, io) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, {});

    // attach the observer to the elements
    // io.observe(scroll);
    introImgs.forEach(img => {
        io.observe(img);
    });


    io.observe(introDescription);

    
});
