$(document).ready( ()=>{
    const introImgs = document.querySelectorAll('.intro-imgs .img');
    const introDescription = document.querySelector('.intro .description');
    const faqs = document.querySelectorAll('.faqs .faq-item');

    const visionSection = document.querySelector('.vision-wrapper');
    const opportunitySection = document.querySelector('.opportunity-wrapper');
    const founderSection = document.querySelector('.founder');

    const timelineLines = document.querySelectorAll('.timeline .line');


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

    const midIo = new IntersectionObserver((entries, io) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const timeLineIo = new IntersectionObserver((entries, io) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1
    });

    io.observe(introDescription);

    midIo.observe(visionSection);
    midIo.observe(opportunitySection);
    midIo.observe(founderSection);

    timelineLines.forEach(line => {
        timeLineIo.observe(line);
    });
    faqs.forEach((faq, index) => {
        faq.style.transitionDelay = `${index * 0.5}s`;
        timeLineIo.observe(faq);
    });
});
