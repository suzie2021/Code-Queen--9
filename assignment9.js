let container=document.querySelector('div.container')
//console.log(container.children)
let cards=document.createElement('div')
cards.className='main'
cards.style.margin="20px"
cards.style.justifyContent="space-around"


let cardone = document.createElement('div')
cardone.className='first-div';
cardone.style.backgroundColor="#FF00E4"
cardone.style.border="3px solid black"
cardone.style.borderRadius="12px"



let heading= document.createElement('h3')
heading.textContent="Benefits of being a web developer"
heading.style.fontSize="50px"
heading.style.fontFamily="Verdana"

let paragraph= document.createElement('p')
paragraph.textContent="The following are benefits of being one;"
paragraph.style.fontSize="40px";
paragraph.style.fontStyle="italic"


let list= document.createElement('li')
list.textContent="Secure a good job that allows to work remotely"
list.style.fontWeight="30px"
list.style.fontStyle="italic"


var image = document.createElement("IMG");
  image.setAttribute("src", "image.jpg");
  image.setAttribute("width", "304");
  image.setAttribute("height", "300");
  image.setAttribute("alt", "A girl");

cardone.appendChild(heading)
cardone.appendChild(paragraph)
cardone.appendChild(list)
cardone.appendChild(image)
cards.appendChild(cardone)

container.appendChild(cards)

let cardtwo = document.createElement('div')
cardtwo.className="second-div"

cardtwo.style.backgroundColor="#1DB9C3"
cardtwo.style.border="3px solid black"
cardtwo.style.borderRadius="12px"
cardtwo.style.margin="3opx"

let heading2=document.createElement('h3')
heading2.textContent="Challenges faced while being a web developer"
heading2.style.fontSize="50px"
heading2.style.fontFamily="Verdana"

let para=document.createElement('p')
para.textContent="Just like any person web developers face challenges in their profession but the most common one is;"
para.style.fontSize="40px"
para.style.fontStyle="italic"

let list2= document.createElement('li')
list2.textContent="Clearly defining your goals and choosing the right tech stack"
list2.style.fontsize=" 50px "
list2.style.fontStyle="italic"

var image2 = document.createElement("IMG");
  image2.setAttribute("src", "image2.jpg");
  image2.setAttribute("width", "304");
  image2.setAttribute("height", "300");
  image2.setAttribute("alt", "Determination");


cardtwo.appendChild(heading2)
cardtwo.appendChild(para)
cardtwo.appendChild(list2)
cardtwo.appendChild(image2)
cards.appendChild(cardtwo)

container.appendChild(cards)


