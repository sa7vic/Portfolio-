let text1 = document.getElementById('text');
let text = ['Frontend Developer!','Data Analyst!'];
let i = 0;
let idx = 1;
let speed = 200;
let direction = true;
setTimeout(writeText, 1700);

function writeText(){
    text1 = document.getElementById('text');
    text1.innerText = text[i].slice(0, idx) + "|";
    if(direction === true){
        idx++;
    }
    else
        idx--;
    if(idx > text[i].length){
        direction = false;
    }
    if(idx === 0){
        direction = true;
        i = i === 0 ? 1 : 0;
    }
    let backSpeed = idx > text[i].length ? 1000 : 50;
    setTimeout(writeText, direction === true ? 200 : backSpeed);
}


function adjustElementsForDevice() {
    const container = document.querySelector('.home');
    const windowWidth = window.innerWidth;
    if ((windowWidth > 768)) {
            container.innerHTML = `<div class="home-content"><h3>Hello, It's Me</h3><h1>Sourav Kumar</h1><h3>And I'm a <span id="text"></span></h3><p>I'm a passionate developer constantly seeking to expand my skill set in web development, machine learning, and data analysis. Currently, I’m focusing on mastering Frontend development, exploring cutting-edge frameworks and tools, while also diving into the exciting field of data science to broaden my expertise.</p><a href="#" class="btn">Download CV</a></div><div class="home-img"><img src="./images/profile-pic.jpeg" alt="profile-pic"></div>`; 
    }
    else {
            container.innerHTML = `<div class="home-content"><h3>Hello, It's Me</h3><h1>Sourav Kumar</h1><h3>And I'm a <span id="text"></span></h3></div><div class="home-img"><img src="./images/profile-pic.jpeg" alt="profile-pic"></div><p>I'm a passionate developer constantly seeking to expand my skill set in web development, machine learning, and data analysis. Currently, I’m focusing on mastering Frontend development, exploring cutting-edge frameworks and tools, while also diving into the exciting field of data science to broaden my expertise.</p><a href="#" class="btn">Download CV</a>`;
        }
}
window.addEventListener('resize',adjustElementsForDevice);
adjustElementsForDevice();
