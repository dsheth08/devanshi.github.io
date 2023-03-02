$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});



const skillsSection= document.getElementById('skills');
const pbars= document.querySelectorAll('.bars');



function showProgress(){
    bars.forEach(bars=> {
        const value = bar.dataset.right;
        bar.style.opacity = 1;
        bar.stle.width = '${value}%';
    }); 
}

function hideProgress(){
    bars.forEach(p =>{
        p.style.opacity=0;
        p.style.width = 0;
    })
}

window.addEventListener('scroll', () => {
    const sectionPos= skills.getBoundingClientRect().top;
    const screenPos= window.innerHeight / 2;

    if (sectionPos < screenPos) {
        showProgress();
    }else{
        hideProgress();
    }
});




