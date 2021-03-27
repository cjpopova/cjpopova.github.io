/*
  Nav bar
          */
var inactive_list = [
  `<a href="about.html">ABOUT</a>`,
  `<a href="Caspar Popova Resume.pdf">RESUME</a>`,
  `<a href="contact.html">CONTACT</a>`
];

var active_list = [
  `<a href="about.html" class="active">ABOUT</a>`,
  `<a href="Caspar Popova Resume.pdf" class="active">RESUME</a>`,
  `<a href="contact.html" class="active">CONTACT</a>`
];


/* nav_id is html id; active_id is null or 1,2,3 */
function loadNavbar(nav_id, active_id) {
  let navb = document.querySelector(nav_id);
  if (navb){
    let html = `<a href="index.html" aria-label="Caspar Popova Home" id="navbar-left">
          <p>Hi, I'm Caspar Popova.</p>
          <p>I study <b>computer science</b></p>
          <p>At Northwestern University.</p> 
          </a>
          <div id="navbar-right">`;

    /* add active or inactive links depending on second arg */
    for (let i = 0; i < 3; i++) {
      if (active_id == i) { html += active_list[i]; }
      else                { html += inactive_list[i]; }
    }
    html += `</div></p>`;
    let container = document.createElement("div");
    container.innerHTML = html;
    navb.append(container);
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("navbar").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.fontSize = "25px";
  }
}

/*
  Projects
            */
var projects = [
{
	title: "Model of Featherweight Java",
	img_source: "images/fj-traces.JPG",
	page_link: "fj.html",
  description: `<p>Winter 2021 | <u><a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/396-496-15.html'>
  CS 396 Dynamics of Programming Languages</a></u></p>
  <p>Collaborator: Sydney Smith.</p>
  <p>Studied and presented the basic properties of Java via <u><a href=
  "https://www.cis.upenn.edu/~bcpierce/papers/fj-toplas.pdf">
  Featherweight Java by Igarashi et al.</a></u> Implemented and tested an executable model 
  of Featherweight Java in PLT Redex and Racket.</p>`
},
{
  title: "Programming Languages (321)",
  img_source: "images/img321.JPG",
  page_link: "pl-321.html",
  description: `<p>Fall 2020 | 
  <u><a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/321.html'>CS 321</a></u></p>
  <p>Created and extended interpreter-based implementations of basic features of programming languages using PLAI (Racket). 
  Studied the basic semantic features of call-by-value programming languages. 
  Examined random program generation for basic call-by-value programming languages.</p>
  <p>Additionally, implemented typechecker for basic semantic features and a garbage collector using PLAI/gc2.</p>`
},
{
  title: "Paper on European Data Privacy",
  img_source: "images/data-priv.JPG",
  page_link: "data-priv.html",
  description: `<p>Spring 2020 | <u><a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/295-2.html'>
  CS 295 Introduction to Law and Digital Technologies</a></u></p>
  <p>Amongst a wide array of international legislation on data privacy, the standards of the European Union have emerged as
  the leader for a possible global data privacy treaty. The full paper can be read <u><a href=data-priv.pdf>here</a></u>.</p>`
},
{
	title: "Menagerie Design Project",
	img_source: "images/menagerie-slide.JPG",
	page_link: "menagerie.html",
  description: `<p>Spring 2020 | DTC-2</p>
  <p>Team members: Grace Huff, Will Buchsbaum, Damian Staszel.</p>
  <p>The Junk Drawer Menagerie was a collaboration with 3 team members to research and compile 
  two technical instruction manuals for working with household objects. Client interviews, research, 
  and reports were completed virtually through email and video communication.</p>
  <p>The design challenge: Patients with traumatic brain injuries enjoy tinkering activities, whether 
  as an occupation or a hobby. Currently available tinkering devices, such as sorting and repair tasks
  had a variety of shortcomings. Designs were often difficult to rebuild or replace, they did 
  not encompass a broad enough range of activities, and were not intuitive to the users.</p>
  <p>The design solution: The Junk Drawer Menagerie is a storage bin containing two sets 
  of comprehensive instructions, paired to a touch-tone telephone and an analog alarm clock, respectively. 
  These instructions contain a number of different tasks related to each device, along with key pieces of 
  information to be employed by both the therapist and the patient.</p>`
},
{
  title: "Snake Video Game",
  img_source: "images/Grey_full.png",
  page_link: "snake.html",
  description: `<p>Winter 2020 | CS 211</p>
  <p>Collaborator: Mieraf Mulat.</p>
  <p>Implemented snake video game</p>`
},
{
	title: "Excellever Design Project",
	img_source: "images/excellever.JPG",
	page_link: "excellever.html",
  description: `<p>Winter 2020 | DTC-1</p>
  <p>Team Members: Jordan Dillard, Alex Montes, Nick Tsung.</p>
  <p>The Excellever was a collaboration with 3 team members to research, document, and construct 
  a physical design project. Client interviews, research, and testing with users were conducted in a 
  collaborative design environment.</p>
  <p>The design challenge: In the current models of wheelchairs available to the general public, 
  most leg rests come with levers that are not practical for the users to use. The levers, which 
  often lie underneath the seat, were shown to be difficult for users to reach, see, and feel. 
  Users have a variety of medical conditions that makes it difficult for them to manipulate
  the levers on wheelchair leg rests.</p>
  <p>The design solution: The Excellever is a lever attachment that extends the lever to the reach 
  of the user to make operating it easier. The design will make the lever easier to find and easier 
  to operate.</p>`
}];

/* for project wrapper on index.html */
function loadProjects(projects, projectWrapper){
  let wrapper = document.querySelector(projectWrapper);
  if (wrapper){
    if(projects instanceof Array){
      for (let proj of projects){
          let html = `<div>
              <a href=${proj.page_link} aria-label=${proj.title}>
                <img src=${proj.img_source} aria-label=${proj.title} class="project-art">
                <p class="landing-project-name">${proj.title}</p>
              </a>
            </div>`

        let container = document.createElement("div");
        container.innerHTML = html;
        container.tabIndex = projects.indexOf(proj); // makes the projects keyboard-focusable
        wrapper.append(container);
      }

    }

  }
}

function loadProjPage(div_id, proj_index) {
  let input_id = document.querySelector(div_id);
  if (input_id){
    let proj = projects[proj_index];
    let html = `<div class="page-contents">
                  <div>
                    <h1>${proj.title}</h1>
                    ${proj.description}
                  </div>
                  <img src=${proj.img_source} aria-label=${proj.title} class="project-art">
                </div>`;

    let container = document.createElement("div");
    container.innerHTML = html;
    input_id.append(container);
  }
}