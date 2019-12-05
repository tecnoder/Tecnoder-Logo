var tl = gsap.timeline({repeat: -1, yoyo:true, repeatDelay: 2});
tl.to({}, 2, {})
  .add(textTimeline())
  .add(logoTimeline())
// tl.reverse(0);

function textTimeline() {
    let textTimeline = gsap.timeline();

    textTimeline.staggerFrom('.text',0.1, {
        display:'none', 
        ease:Power1.easeInOut,
    },0.05)

    return textTimeline
}

function logoTimeline() {
    let logoTimeline = gsap.timeline();

    logoTimeline.to('#logo',0.5, {
        scale: 1.05,
        textShadow:"1px 0px 2px #bfbbbb, 0px 1px 2px #bfbbbb, -1px 0px 2px #bfbbbb, 0px -1px 2px #bfbbbb",
        yoyo:true, 
        repeat:1
      })

    return logoTimeline
}