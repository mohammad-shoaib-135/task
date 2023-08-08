

// #1 size js start
let optionMenuBox=document.querySelector('.select__menu'),
        selectBtn=document.querySelector('.select__btn'),
        options=document.querySelectorAll('.option'),
        select__text=document.querySelector('.select__text')
    
       selectBtn.addEventListener('click', ()=>optionMenuBox.classList.toggle('active'));
       options.forEach(item=>{
        item.addEventListener('click' , ()=>{
            let selectedOption =item.querySelector('.option__text').innerText;
            select__text.innerText= selectedOption;
            optionMenuBox.classList.remove('active');
        })
       });

      
// #1 color js start
       
const  optionMenu__color=document.querySelector('.select__menu__color'),
       selectBtn__color=optionMenu__color.querySelector('.select__btn__color'),
       options__color=optionMenu__color.querySelectorAll('.option__color'),
       select__text__color=optionMenu__color.querySelector('.select__text__color')
    
       selectBtn__color.addEventListener('click', ()=>optionMenu__color.classList.toggle('active'));
       options__color.forEach(item=>{
        item.addEventListener('click' , ()=>{
            let selectedOption =item.querySelector('.option__text__color').innerText;
            select__text__color.innerText= selectedOption;
            optionMenu__color.classList.remove('active');
        })
       });


 // #2 size js start
const optionMenu__second__box__size=document.querySelector('.select__menu__second__box__size'),
selectBtn__second__box__size = optionMenu__second__box__size.querySelector('.select__btn__second__box__size'),
options__second__box__size = optionMenu__second__box__size.querySelectorAll('.option__second__box__size'),
select__text__second__box__size =optionMenu__second__box__size.querySelector('.select__text__second__box__size')

selectBtn__second__box__size.addEventListener('click', ()=>optionMenu__second__box__size.classList.toggle('active'));
options__second__box__size.forEach(item=>{
 item.addEventListener('click' , ()=>{
     let selectedOption =item.querySelector('.option__text__second__box__size').innerText;
     select__text__second__box__size.innerText= selectedOption;
     optionMenu__second__box__size.classList.remove('active');
 })
});

//#2 color js start

const  optionMenu__color__second__box__color = document.querySelector('.select__menu__second__box__color'),
selectBtn__second__box__color = optionMenu__color__second__box__color.querySelector('.select__btn__second__box__color'),
options__second__box__color = optionMenu__color__second__box__color.querySelectorAll('.option__second__box__color'),
select__text__second__box__color = optionMenu__color__second__box__color.querySelector('.select__text__second__box__color')

selectBtn__second__box__color.addEventListener('click', ()=>optionMenu__color__second__box__color.classList.toggle('active'));
options__second__box__color.forEach(item=>{
 item.addEventListener('click' , ()=>{
     let selectedOption =item.querySelector('.option__text__second__box__color').innerText;
     select__text__second__box__color.innerText= selectedOption;
     optionMenu__color__second__box__color.classList.remove('active');
 })
});



//box two active dropdown js


// #1 size js start
let optionMenuBox_two =document.querySelector('.select__menu_two'),
        selectBtn_two = document.querySelector('.select__btn_two'),
        options_two = document.querySelectorAll('.option_two'),
        select__text_two = document.querySelector('.select__text_two')
    
       selectBtn_two.addEventListener('click', ()=>optionMenuBox_two.classList.toggle('active'));
       options_two.forEach(item=>{
        item.addEventListener('click' , ()=>{
            let selectedOption =item.querySelector('.option__text_two').innerText;
            select__text_two.innerText= selectedOption;
            optionMenuBox_two.classList.remove('active');
        })
       });

      
// #1 color js start
       
const  optionMenu__color_two = document.querySelector('.select__menu__color_two'),
       selectBtn__color_two = document.querySelector('.select__btn__color_two'),
       options__color_two = document.querySelectorAll('.option__color_two'),
       select__text__color_two = document.querySelector('.select__text__color_two')
    
       selectBtn__color_two.addEventListener('click', ()=>optionMenu__color_two.classList.toggle('active'));
       options__color_two.forEach(item=>{
        item.addEventListener('click' , ()=>{
            let selectedOption =item.querySelector('.option__text__color_two').innerText;
            select__text__color_two.innerText= selectedOption;
            optionMenu__color_two.classList.remove('active');
        })
       });


 // #2 size js start
const optionMenu__second__box__size_two =document.querySelector('.select__menu__second__box__size_two '),
selectBtn__second__box__size_two = document.querySelector('.select__btn__second__box__size_two '),
options__second__box__size_two  = document.querySelectorAll('.option__second__box__size_two '),
select__text__second__box__size_two  = document.querySelector('.select__text__second__box__size_two ')

selectBtn__second__box__size_two.addEventListener('click', ()=>optionMenu__second__box__size_two.classList.toggle('active'));
options__second__box__size_two.forEach(item=>{
 item.addEventListener('click' , ()=>{
     let selectedOption =item.querySelector('.option__text__second__box__size_two').innerText;
     select__text__second__box__size_two.innerText= selectedOption;
     optionMenu__second__box__size_two.classList.remove('active');
 })
});

//#2 color js start

const  optionMenu__color__second__box__color_two = document.querySelector('.select__menu__second__box__color_two'),
selectBtn__second__box__color_two = document.querySelector('.select__btn__second__box__color_two'),
options__second__box__color_two = document.querySelectorAll('.option__second__box__color_two'),
select__text__second__box__color_two = document.querySelector('.select__text__second__box__color_two')

selectBtn__second__box__color_two.addEventListener('click', ()=>optionMenu__color__second__box__color_two.classList.toggle('active'));
options__second__box__color_two.forEach(item=>{
 item.addEventListener('click' , ()=>{
     let selectedOption =item.querySelector('.option__text__second__box__color_two').innerText;
     select__text__second__box__color_two.innerText= selectedOption;
     optionMenu__color__second__box__color_two.classList.remove('active');
 })
});



//box three size and color js


// #1 size js start
let optionMenuBox_three=document.querySelector('.select__menu_three'),
        selectBtn_three=document.querySelector('.select__btn_three'),
        options_three=document.querySelectorAll('.option_three'),
        select__text_three=document.querySelector('.select__text_three')
    
        selectBtn_three.addEventListener('click', ()=>optionMenuBox_three.classList.toggle('active'));
        options_three.forEach(item=>{
        item.addEventListener('click' , ()=>{
            let selectedOption =item.querySelector('.option__text_three').innerText;
            select__text_three.innerText= selectedOption;
            optionMenuBox_three.classList.remove('active');
        })
       });

      
// #1 color js start
       
const  optionMenu__color_three = document.querySelector('.select__menu__color_three'),
       selectBtn__color_three = document.querySelector('.select__btn__color_three'),
       options__color_three = document.querySelectorAll('.option__color_three'),
       select__text__color_three = document.querySelector('.select__text__color_three')
    
       selectBtn__color_three.addEventListener('click', ()=>optionMenu__color_three.classList.toggle('active'));
       options__color_three.forEach(item=>{
        item.addEventListener('click' , ()=>{
            let selectedOption =item.querySelector('.option__text__color_three').innerText;
            select__text__color_three.innerText= selectedOption;
            optionMenu__color_three.classList.remove('active');
        })
       });


 // #2 size js start
const optionMenu__second__box__size_three=document.querySelector('.select__menu__second__box__size_three'),
selectBtn__second__box__size_three = document.querySelector('.select__btn__second__box__size_three'),
options__second__box__size_three = document.querySelectorAll('.option__second__box__size_three'),
select__text__second__box__size_three =document.querySelector('.select__text__second__box__size_three')

selectBtn__second__box__size_three.addEventListener('click', ()=>optionMenu__second__box__size_three.classList.toggle('active'));
options__second__box__size_three.forEach(item=>{
 item.addEventListener('click' , ()=>{
     let selectedOption =item.querySelector('.option__text__second__box__size_three').innerText;
     select__text__second__box__size_three.innerText= selectedOption;
     optionMenu__second__box__size_three.classList.remove('active');
 })
});

//#2 color js start

const  optionMenu__color__second__box__color_three = document.querySelector('.select__menu__second__box__color_three'),
selectBtn__second__box__color_three = document.querySelector('.select__btn__second__box__color_three'),
options__second__box__color_three = document.querySelectorAll('.option__second__box__color_three'),
select__text__second__box__color_three = document.querySelector('.select__text__second__box__color_three')

selectBtn__second__box__color_three.addEventListener('click', ()=>optionMenu__color__second__box__color_three.classList.toggle('active'));
options__second__box__color_three.forEach(item=>{
 item.addEventListener('click' , ()=>{
     let selectedOption =item.querySelector('.option__text__second__box__color_three').innerText;
     select__text__second__box__color_three.innerText= selectedOption;
     optionMenu__color__second__box__color_three.classList.remove('active');
 })
});




// input radio check box select js


const box_one_radio= document.querySelector('#box_one_radio');
const box_two_radio= document.querySelector('#box_two_radio');
const box_three_radio= document.querySelector('#box_three_radio');
const has__Box__One_container = document.querySelector('#has__Box__One_container');
const has__Box__Two_container = document.querySelector('#has__Box__Two_container');
const has__Box__Three_container = document.querySelector('#has__Box__Three_container');



box_one_radio.addEventListener('click', ()=>{ 

    has__Box__One_container.style.display="block"
    has__Box__Two_container.style.display="none"
    has__Box__Three_container.style.display="none"
}
)


box_two_radio.addEventListener('click', ()=>{ 

    has__Box__One_container.style.display="none"
    has__Box__Two_container.style.display="block"
    has__Box__Three_container.style.display="none"
}
)


box_three_radio.addEventListener('click', ()=>{ 

    has__Box__One_container.style.display="none"
    has__Box__Two_container.style.display="none"
    has__Box__Three_container.style.display="block"
}
)



// input_bg_clr.addEventListener('click',function(){
//     alert('Hello');
// })