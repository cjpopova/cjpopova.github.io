/*
  Nav bar
          */
var inactive_list = [
  `<a href="about.html">ABOUT</a>`,
  `<a href="resume.html">RESUME</a>`,
  `<a href="contact.html">CONTACT</a>`
];

var active_list = [
  `<a href="about.html" class="active">ABOUT</a>`,
  `<a href="resume.html" class="active">RESUME</a>`,
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
	title: "Music Player",
	img_source: "images/musicplayer.jpg",
	page_link: "music-player.html",
  description: `<p>Created: Fall 2020, CS 330.</p>
  <p>The Music Player is an implementation of a basic music player using Javascript, HTML, and CSS. 
  The purpose of this project is to practice creating basic webpages.</p>`
},
{
	title: "Junk Drawer Menagerie",
	img_source: "images/menagerie-overview-copy.jpg",
	page_link: "menagerie.html",
  description: `<p>Created: Spring 2020, DTC-2.</p>
  <p>Team members: Grace Huff, Will Buchsbaum, Damian Staszel.</p>
  <p>The Junk Drawer Menagerie was a collaboration with 3 team members to research and compile 
  two technical instruction manuals for working with household objects. Client interviews, research, 
  and reports were completed virtually through email and video communication.</p>
  <p>The design challenge:  Patients with traumatic brain injuries enjoy tinkering activities, whether 
  as an occupation or a hobby. Currently availeble tinkering devices, such as sorting and repair tasks
  had a variety of shortcomings. Designs were often difficult to rebuild or replace, they did 
  not encompass a broad enough range of activities, and were not intuitive to the users.</p>
  <p>The design solution: The Junk Drawer Menagerie is a storage bin containing two sets 
  of comprehensive instructions, each paired to a touch-tone telephone and an analog alarm clock. These 
  instructions contain a number of different tasks related to each device, along with key pieces of 
  information to be employed by both the therapist and the patient.</p>`
},
{
	title: "The Excellever",
	img_source: "images/excellever-poster-copy.jpg",
	page_link: "excellever.html",
  description: `<p>Created: Winter 2020, DTC-1.</p>
  <p>Team Members: Jordan Dillard, Alex Montes, Nick Tsung.</p>
  <p>The Excellever was a collaboration with 3 team members to research, document, and construct 
  a physical design project.</p>
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