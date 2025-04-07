function loading(){
//cursor
document.addEventListener("mousemove",function(e) {
    gsap.to("#crsr",{
      left:e.clientX,
      top:e.clientY,
      duration:0.5,
    })
  });
  
  
  Shery.makeMagnet("#home a img");
  Shery.makeMagnet("#navbar-part2 a");
  Shery.makeMagnet(".elem");
  Shery.makeMagnet(".heading");

  const load = document.querySelector(".loading span");
  const tl = gsap.timeline();
  tl.to("main", {
    display:"none",
})
.from("nav img",{
    display:"none",
})
.to(load, {
    opacity: 1,
    duration: 2,
    ease: "power2.out"
})
.to(load, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: function () {
        load.textContent = "नमस्ते";
    }
})
.to(load, {
    opacity: 1,
    duration: 2,
    ease: "power2.out"
})
.to("main", {
    display:"initial",
})
.to(".loading", {
    y: -1000,
    duration: 1.5,
    ease: "power2.inOut"
});

tl.from(".hero h1",{
    y:100,
    duration: .5,
    stagger:.3,
});

tl.from("#navbar-part2 a",{
    y:-100,
    duration: .5,
    stagger:.3,
});
tl.from(".elem img",{
   opacity:0,
   duration:.5,
   stagger:.15,
});

}

loading();

function landingPage(){
    
//LANDING PAGE
if (window.innerWidth >= 900 && window.innerWidth <= 2000){

    document.querySelectorAll('.elem').forEach(elem => {
        let image = elem.querySelector("img");
        let tl = gsap.timeline();
        
        let xTransform = gsap.utils.random(-100, 100);
        
        tl.set(image, {
            transformOrigin: `${xTransform < 0 ? '0' : '100%'}`
        },"start")
        .to(image, {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: elem,
                scroller: "body",
                start: "top top",
                end: "bottom top", 
                scrub: 5
            }
        },"start")
        .to(elem, {
            xPercent: xTransform,
            ease: "Power4.easeInOut",
            scrollTrigger: {
                trigger: image,
                start: "top bottom",
                scroller: "body",
    
                end: "bottom top", 
                scrub: 5
            }
        }, "start");
    });
    
}

}

landingPage();

function about(){
    
// ABOUT
gsap.from("#about h1", {
    y: -200,
    duration: 1,
    ease: "easeInOut",
    opacity: 0,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 50%",
        end: "top 40%",
        scrub: 5
    }
});


gsap.from("#about p", {
    y:300,
    duration: 3,
    ease: "easeInOut",
    opacity: 0,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 50%",
        end: "top top",
        scrub: 5
    }
});

}

about();





function eventfxn() {
    if (window.innerWidth >= 450 && window.innerWidth <= 2000) {
        // EVENTS section
        gsap.to(".event", {
            backgroundColor: "#EF9D71",
            scrollTrigger: {
                trigger: "#about_us ",
                start: "top top",
                end: "top -70%",
                scrub: 5,
            },
        });

        gsap.to(".container", {
            x: () => -(document.querySelector(".container").scrollWidth - window.innerWidth + ((document.querySelector(".container").scrollWidth - window.innerWidth) * 0.06)),
            ease: "none",
            scrollTrigger: {
                trigger: ".event",
                scroller: "body",
                start: "top top",
                end: () => `+=${document.querySelector(".container").scrollWidth - window.innerWidth + ((document.querySelector(".container").scrollWidth - window.innerWidth) * 0.9)}`,
                scrub: 5,
                pin: true
           }
        });

        var h4 = document.querySelector(".icons h4").textContent;
        var clutter = '';

        for (var i = 0; i < h4.length; i++) {
            clutter += `<span>${h4[i]}</span>`;
        }
        document.querySelector(".icons h4").innerHTML = clutter;

        gsap.to(".icons span", {
            color: "white",
            stagger: 0.1,
            delay: 2,
            fontFamily: "'Segoe UI', sans-serif",
            scrollTrigger: {
                trigger: ".event",
                scroller: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 5,
            },
        });
    }
}

eventfxn();
// window.addEventListener("resize", () => location.reload());

function achievementfxn(){


    if (window.innerWidth >= 900 && window.innerWidth <= 2000) {
        var img1=document.querySelector("#achieve img:nth-child(1)");
        gsap.to(img1, {
            perspective: 800,
            rotateY: 15,
            rotateX: 1,
            translateY: -100,
            scale: 1.2,
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.01,
            ease: "easeInOut",
            scrollTrigger: {
                scrub: true,
                trigger: "#achieve",
                start: "top 18%",
                end: "top 18%",
                pin:true,
            }
        });
    
        var img2=document.querySelector("#achieve img:nth-last-child(1)");
        gsap.to(img2, {
            perspective: 800,
            rotateY: -15,
            rotateX: 2,
            translateY: -100,
            scale: 1.2,
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.01,
            ease: "easeInOut",
            scrollTrigger: {
                scrub: true,
                trigger: "#achieve",
                start: "top 18%",
                end: "top 18%",
                pin:true,
            }
        });
        gsap.to("#achieve",{
            scrollTrigger:{
                scroller:"body",
                trigger:"#achieve",
                pin:true,
                start:"top top",
                end:"bottom -10%",
            }
        })
    
    
    
    }
    
}
achievementfxn();

