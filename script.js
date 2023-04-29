
let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-user');
});

let typed =new Typed('.auto-input',{
    strings : ['Front-End Developer','Freelancer','UI designer'],
    typedSpeed :100,
    backSpeed :100,
    backDelay :2000,
    loop:true,
})