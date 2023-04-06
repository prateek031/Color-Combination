var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#first",
        start: "top top",
        pin: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 6)
    }
})



tl.to("#btm img", {
    rotate: "-180deg",
    stagger: 0.05,
    scale: 0.2,
    ease: "power1",
}, "flag")

.to("#smcircle", {
    scale: "0.6",
    ease: "power1",
}, "flag")

.to("#top img", {
    scale: "0.2",
    ease: "power1",
}, "flag")

.to("#center img", {
    scale: "0",
    ease: "power1",
}, "flag")

.to("#fs>h1", {
    bottom : "-70%",
    ease: "power1",
}, "flag")

.to("#center span", {
    opacity: 0,
    duration: 0.10,
}, "flag")

.to("#fs #pinkcircle", {
    top: "50%",
    width: "120px",
    height: "120px",
    ease: "power1",
}, "flag")

.to("#bgimg img", {
    scale: "1.30",
    ease: "power0",
}, "flag")






.to("#imgcircle", {
    scale: "0.3",
    ease: "power1",
}, "flag1")

.to("#smcircle", {
    scale: "0.3",
    ease: "power1",
}, "flag1")

.to("#fs #pinkcircle", {
    opacity: 0,
    ease: "power1",
}, "flag1")

.to("#bgimg img", {
    scale: "1.15",
    ease: "power0",
}, "flag1")
.to("#sech1", {
    rotate: "0deg",
    bottom: "-45%",
    ease: "power0",
    delay: -0.3,
}, "flag1")









.to("#imgcircle", {
    scale: 0,
    ease: "power1",
}, "flag2")

.to("#smcircle", {
    scale: 0,
    ease: "power1",
}, "flag2")

.to("#bgimg img", {
    scale: "1",
    ease: "power0",
}, "flag2")
.to("#fs #pinkbox", {
    top: "0%",
    ease: "power0",
    delay: 0.1,
}, "flag2")

.to("#fs #pinkbox", {
    top: "-60%",
    ease: "power0",
    delay: 0.7,
})







var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#second",
        start: "top top",
        pin: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 6)
    }
})

tl2.to(".circle", {
    top: "50%",
    scale: 1,
    stagger: ".1",
    ease: "power1",
}, "flag3")

.to("#cone", {
    left: "41%",
    ease: "power1",
}, "flag3")

.to("#ctwo", {
    left: "58%",
    ease: "power1",
}, "flag3")

.to(".circle", {
    left: "50%",
    ease: "power1",
    delay: "1",
})

.to(".circle", {
    width: "220px",
    height: "220px",
    ease: "power1",
})

.to(".circle", {
    width: "120vw",
    height: "120vw",
    ease: "power0",
}, "flag4")

.to("#count #overcount", {
    top: "-80%",
    ease: "power0",
    delay: 0.2,
}, "flag4")

.to("#btm1 #strips #strip2", {
    left: "40%",
    ease: "power0",
}, "flag4")

.to("#top1>h1", {
    right: "-70%",
    ease: "power0",
    delay: -0.05,
})

.to("#top1>h1", {
    right: "-40%",
    ease: "power0",
}, "flag5")

.to("#mid>h1", {
    opacity:0,
    ease: "power0",
    delay: "0.05",
}, "flag5")

.to("#top1 #gradient-box", {
    left: "-30%",
    ease: "power0",
}, "flag5")

.to("#btm1 #strips #strip2", {
    left: "3.5%",
    ease: "power0",
    delay: -0.6,
    duration: 1,
}, "flag5")

.to("#top1>h1", {
    right: "500%",
    duration: 5,
    ease: "power0",
}, "flag6")

.to("#mid #secondh1", {
    opacity:1,
    ease: "power0",
    delay: "0.1",
}, "flag6")

.to("#count #overcount", {
    top: "-180%",
    ease: "power0",
    delay: 1,
}, "flag6")

.to("#top1 #gradient-box", {
    left: "-90%",
    ease: "power0",
}, "flag6")

.to("#btm1 #strips #strip3", {
    left: "40%",
    ease: "power0",
    delay: 0.7,
    duration: 1,
}, "flag6")


.to("#btm1 #strips #strip3", {
    left: "3.5%",
    ease: "power0",
    delay: -3,
    duration: 1,
}, "comeup")


.to("#top1 #pinkboxes .pbox", {
    y: "-100%",
    stagger: 0.1,
    ease:"power0",
    delay: -3,
}, "comeup")



.to("#top1 #pinkboxes .pbox .small", {
    x: "-40%",
    ease:"power0",
    delay: -1.5,
}, "shift")

.to("#behindsmall", {
    opacity: 1,
    delay: -1.5,
}, "shift")

.to("#top1 #pinkboxes .pbox .small", {
    x: "-50%",
    ease:"power0",
}, "flag7")

.to("#top1 #pinkboxes .pbox .small .smallest", {
    x: "-30%",
    ease:"power0",
}, "flag7")


var tl3 = gsap.timeline({
    scrollTrigger: {
    trigger: "#third",
    start: "top top",
    scrub: 1,
    pin: true,
    end: "+=" + (window.innerHeight * 2),
}
})

tl3.to("#third>#overthird", {
    top: "-100%",
    ease: "power1",
}, "same")
tl3.to("#fourth", {
    top: 0,
    ease: "power1",
}, "same")
tl3.to("#fifth", {
    top: "100%",
    ease: "power1",
}, "same")
tl3.to("#sixth", {
    top: "200%",
    ease: "power1",
}, "same")
tl3.to("#seventh", {
    top: "300%",
    ease: "power1",
}, "same")
tl3.to("#circle-img img", {
    rotate: "100deg",
    ease: "power1",
}, "same")


tl3.to("#fourth", {
    top: "-120%",
    ease: "power1",
}, "same1")
tl3.to("#circle-img img", {
    rotate: "200deg",
    ease: "power1",
}, "same1")

tl3.to("#fifth #continous h3", {
    x: "-400%",
    ease: "power1",
}, "same1")

tl3.to("#fifth", {
    top: "0%",
    ease: "power1",
}, "same1")

tl3.to("#sixth", {
    top: "100%",
    ease: "power1",
}, "same1")
tl3.to("#seventh", {
    top: "200%",
    ease: "power1",
}, "same1")

tl3.to("#fifth #rays-cover", {
    x: "90%",
    y: "70%",
    ease: "power0",
    delay: "0.05",
    rotate: "0deg",
}, "same1")

tl3.to("#fifth #text5 #firsth1", {
    x: "30%",
    ease: "power1",
}, "same1")

tl3.to("#fifth #text5 #secondh1", {
    x: "-50%",
    ease: "power1",
}, "same1")
tl3.to("#fifth #text5 #thirdh1", {
    x: "30%",
    ease: "power1",
}, "same1")



tl3.to("#fifth #text5 #firsth1", {
    x: "50%",
    ease: "power1",
    delay: -0.20,
}, "same2")
tl3.to("#fifth #text5 #secondh1", {
    x: "-90%",
    ease: "power1",
    delay: -0.20,
}, "same2")
tl3.to("#fifth #text5 #thirdh1", {
    x: "80%",
    ease: "power1",
    delay: -0.20,
}, "same2")


tl3.to("#fifth #rays-cover", {
    x: "230%",
    y: "90%",
    ease: "power0",
    delay: "0.05",
}, "same2")

tl3.to("#fifth", {
    top: "-100%",
    ease: "power1",
}, "same2")

tl3.to("#sixth", {
    top: "0%",
    ease: "power1",
}, "same2")
tl3.to("#seventh", {
    top: "100%",
    ease: "power1",
}, "same2")
tl3.to("#text5", {
    y: "-20%",
    ease: "power0",
}, "same2")
tl3.to("#hover-purple", {
    y: "-20%",
    ease: "power0",
}, "same2")


tl3.to("#fifth", {
    top: "-200%",
    ease: "power1",
}, "same3")
tl3.to("#sixth", {
    top: "-100%",
    ease: "power1",
}, "same3")
tl3.to("#seventh", {
    top: "0%",
    ease: "power1",
}, "same3")

tl3.to("#text5", {
    y: "-30%",
    ease: "power0",
}, "same3")
tl3.to("#seventh #imagetwo", {
    // top: "-100%",
    y: "-100%",
    ease: "power1",
    duration: 3,
    delay: -0.1,
}, "same3")
tl3.to("#sixth #imageone", {
    y: "20%",
    ease: "power0",
}, "same3")
tl3.to("#hover-purple", {
    y: "-50%",
    ease: "power0",
}, "same3")
tl3.to("#seventh #imagethree", {
    y: "-130%",
    ease: "power0",
    // delay: -0.05,
    // duration: 2,
}, "same3")
tl3.to("#seventh #continous2 h3", {
    x: "-50%",
    ease: "power1",
}, "same3")
tl3.to("#seventh #continous2", {
    y: "-50%",
    ease: "power1",
}, "same3")

tl3.to("#lastcircle", {
    scale: "6",
    ease: "power1",
    delay: -2.5,
})











document.querySelector("#hover-blue").addEventListener("mouseover", function(){
    document.querySelector("#third").style.backgroundColor = "#DEF3FF";
    document.querySelector("#rays-cover").style.backgroundColor = "#DEF3FF";
    document.querySelector("#hover-blue #darkimg").style.scale = "1";
    document.querySelector("#hover-blue h4").style.color = "#DEF3FF";
})

document.querySelector("#hover-blue").addEventListener("mouseout", function(){
    document.querySelector("#third").style.backgroundColor = "#FFF7FF";
    document.querySelector("#rays-cover").style.backgroundColor = "#FFF7FF";
    document.querySelector("#hover-blue #darkimg").style.scale = "0";
    document.querySelector("#hover-blue h4").style.color = "#D5A7B4";
})


document.querySelector("#hover-magenta").addEventListener("mouseover", function(){
    document.querySelector("#third").style.backgroundColor = "#794856";
    document.querySelector("#hover-magenta #darkimg2").style.scale = "1";
    document.querySelector("#hover-magenta h4").style.color = "#794856";
})

document.querySelector("#hover-magenta").addEventListener("mouseout", function(){
    document.querySelector("#third").style.backgroundColor = "#FFF7FF";
    document.querySelector("#hover-magenta #darkimg2").style.scale = "0";
    document.querySelector("#hover-magenta h4").style.color = "#D5A7B4";
})

document.querySelector("#hover-purple").addEventListener("mouseover", function(){
    document.querySelector("#third").style.backgroundColor = "#706993";
    document.querySelector("#hover-purple #darkimg3").style.scale = "1";
    document.querySelector("#hover-purple h4").style.color = "#706993";
})

document.querySelector("#hover-purple").addEventListener("mouseout", function(){
    document.querySelector("#third").style.backgroundColor = "#FFF7FF";
    document.querySelector("#hover-purple #darkimg3").style.scale = "0";
    document.querySelector("#hover-purple h4").style.color = "#D5A7B4";
})


// var tl4 = gsap.timeline({
//     scrollTrigger: {
//     trigger: "#sixth",
//     start: "top top",
//     markers: true,
//     scrub: 1,
//     pin: true,
//     end: "+=" + (window.innerHeight * 2),
// }
// })


