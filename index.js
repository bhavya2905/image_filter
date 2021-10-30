let blur=document.getElementById('blur');
let contrast=document.getElementById('contrast');
let sepia=document.getElementById('sepia');
let hue=document.getElementById('hue');
let  image=document.getElementById('image');
let upload=document.getElementById('upload');

upload.onchange=()=>{
    document.querySelector('.img').style.display="block";
    let reader=new FileReader();
    reader.readAsDataURL(upload.files[0]);
    reader.onload=()=>{
        image.setAttribute("src",reader.result);
    }
}

let filters=document.querySelectorAll(".filter input[type='range']");
filters.forEach(
    filter=>{
        filter.addEventListener('input',()=>{
            image.style.filter=`
            blur(${blur.value}px) 
            contrast(${contrast.value}%) 
            sepia(${sepia.value}%) 
            hue-rotate(${hue.value}deg)
            `
        })
    }
)