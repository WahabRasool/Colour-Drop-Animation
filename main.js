gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
		toArray = s => gsap.utils.toArray(s),
		mainSVG = select('#mainSVG'),
		colorArray = ["fbe46c","fe987b","d569fa","5f88ea","63cdeb", "afff8a", "fbe46c"],
		allPaths = toArray('path')

colorArray = colorArray.map(x => Array.from(x)[0] == '#' ? x : `#${x}`);
const interp = gsap.utils.interpolate(colorArray);

gsap.set('svg', {
	visibility: 'visible'
})

let mainTl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power1.inOut'
	},
	repeat: -1
});

let cTl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power1.inOut'
	}
});
cTl.add('part1')
.to(['#C2', '#C3'], {
	y: '+=700'
}, 'part1')
.to('#C1', {
	morphSVG: {
		shape: '#longC'
	}
}, 'part1')
.add('part2')
.to('#C1', {
	morphSVG: {
		shape: '#longC3'
	}
}, 'part2')
.fromTo(['#C2_offscreen', '#C1_offscreen'], {
	y: -700
}, {
	stagger: {
		each: 0.05
	},
	y: 0,
	//immediateRender: false
}, 'part2')

let o1Tl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power1.inOut'
	}
});
o1Tl.add('part1')
.to('#O2', {
	y: 700,
	duration: 1.15
}, 'part1')
.to('#longO1', {
	morphSVG: {
		shape: '#longO1_1'
	},
	duration: 1.15
}, 'part1')
.add('part2')
.to('#longO1', {
	morphSVG: {
		shape: '#O2'
	},
	duration: 0.85
}, 'part2')
.from('#longO1_offscreen', {
	y: -700,
	duration: 0.85
}, 'part2')

let lTl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power1.inOut'
	}
});
lTl.add('part1')
.to(['#L2', '#L3'], {
	y: 700,
	duration: 0.75
}, 'part1')
.to('#L1', {
	morphSVG: {
		shape: '#longL',
		shapeIndex: 6
	},
	duration: 0.75
}, 'part1')
.add('part2')
.to('#L1', {
	morphSVG: {
		shape: '#L3'
	},
	duration: 1.25
}, 'part2')
.fromTo(['#L2_offscreen', '#L1_offscreen'], {
	y: -700
}, {
	stagger: {
		each: 0.05
	},	
	y: 0,
	duration: 1.25
	//immediateRender: false
}, 'part2')


let o2Tl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power1.inOut'
	}
});
o2Tl.add('part1')
.to('#longO2', {
	morphSVG: {
		shape: '#O3'
	},
	duration: 0.6
}, 'part1')
.from('#longO4', {
	y: -700,
	duration: 0.6
}, 'part1')
.add('part2')
.to('#longO4', {
	morphSVG: {
		shape: "M636.56,125.04v849.85c0,27-20.61,39.99-50.91,39.99s-51.12-12.98-51.12-39.99V125.04c0-27,20.61-40.19,51.12-40.19s50.91,13.19,50.91,40.19ZM592.25,963.96V135.96c0-4.12-2.68-7.21-6.6-7.21-4.12,0-7.21,3.09-7.21,7.21v828c0,3.92,3.09,7.01,7.21,7.01,3.5,0,6.6-3.09,6.6-7.01Z"
	},
	duration: 1.4
}, 'part2')
.to('#longO2', {
	y: 800,
	duration: 1.4
}, 'part2') 


let uTl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power1.inOut'
	}
});
uTl.add('part1')
.to('#U1', {
	morphSVG: {
		shape: '#longU1'
	},
	duration: 0.8
}, 'part1')
.to('#longU2', {
	morphSVG: {
		shape: '#U3'
	},
	duration: 0.8
}, 'part1')
.add('part2')
.to('#U1', {
	morphSVG: {
		shape: "M708.3,403.36h44.31v571.52c0,27-20.61,39.99-50.91,39.99s-51.12-12.98-51.12-39.99V403.36h43.9v560.6c0,3.92,3.09,7.01,7.21,7.01,3.5,0,6.6-3.09,6.6-7.01V403.36Z"
	},
	duration: 1.2
}, 'part2')
.to('#longU2', {
	y: 700,
	duration: 1.2
}, 'part2')
.from('#U1_offscreen', {
	y: -400,
	duration: 1.2
}, 'part2')

let rTl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power1.inOut'
	}
});
rTl.add('part1')
.to('#R1', {
	morphSVG: {
		shape: '#R3_long'
	},
	duration: 0.4
}, 'part1')
.from('#R2_offscreen', {
	y: -700,
	duration: 0.4
}, 'part1')
.add('part2')
 .to('#R2_offscreen', {
	morphSVG: {
		shape: "M868.66,332.36c0,10.51-5.77,20.82-11.75,23.5,5.77,2.68,11.75,13.19,11.75,23.7v632.01h-44.31V385.13c0-4.12-2.68-7.21-6.6-7.21h-7.21v633.66h-43.9V84.84h51.12c34.01,0,50.91,12.37,50.91,37.31v210.21ZM810.53,334.01h7.21c3.5,0,6.6-3.3,6.6-7.21v-190.84c0-3.92-3.09-7.21-6.6-7.21h-7.21v205.27Z"
	},
	duration: 1.6
}, 'part2') 
.to('#R1', {
	y: 700,
	duration: 1.6
}, 'part2')

let colorTl = gsap.timeline();
colorTl.to(allPaths, {
	fill: '#fff',
	duration: 0.25 * colorArray.length,
	modifiers: {
		fill: function() {
      return interp(this.ratio);
    }
	},
	stagger: {
		each: 0.05,
		repeat: -1
	},
	ease: 'sine.inOut'
}).seek(100)
.to('#glowAlpha', {
	floodColor: '#fff',
	duration: 0.25 * colorArray.length,
	modifiers: {
		floodColor: function() {
      return interp(this.ratio);
    }
	},
	stagger: {
		each: 0.05,
		repeat: -1
	},
	ease: 'sine.inOut'
}, 0).seek(100)

mainTl.add([cTl, o1Tl, lTl, o2Tl, uTl, rTl])
.add(allPaths, 0)

//ScrubGSAPTimeline(mainTl)