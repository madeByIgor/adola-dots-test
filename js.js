gsap.set('.adola-avatar-dot--blue', {
    xPercent: -50
})
gsap.set('.adola-avatar-dot--purple', {
    // yPercent: -50
})
gsap.set('.adola-avatar-dot--green', {
    // yPercent: -50
})

gsap.set('.adola-avatar',{
    transformOrigin: 'center center'
})

let pulsingDots = gsap.timeline()

pulsingDots.to('.adola-avatar-dot', {
    scale: 1.5,
    duration: 1,
    filter: 'blur(0.3em)'
}).to('.adola-avatar-dot', {
    scale: 1,
    duration: 1,
    filter: 'blur(0.6em)'
})
gsap.to('.adola-avatar', {
    rotation: 360,
    duration: 3,
    ease: "none"
})