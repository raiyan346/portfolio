function Skills(){

const tech=[

"React",

"JavaScript",

"Tailwind",

"GSAP",

"Figma",

"Framer"

]

return(

<section className="py-20">

<div className="flex gap-5 justify-center">

{

tech.map((item)=>(

<div

className="glass px-8 py-5 rounded-full"

key={item}

>

{item}

</div>

))

}

</div>

</section>

)

}

export default Skills