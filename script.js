console.log("js logged in");
// nav btn active
const navbtns = document.querySelectorAll(".navbtn");
let i = 0;
navbtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    navbtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

let ul = document.querySelector(".linkul");
let pul = document.querySelector(".plinkul");

// input function
function inputFunc(event, inputvalue) {
  var index = event.target.getAttribute("index");
  // console.log(ul.children[index]);
  // console.log(index);
  ul.children[index].href = `${inputvalue}`;
  pul.children[index].href = `${inputvalue}`;
}

// remove func
function removeEl(remove) {
  remove.target.parentNode.parentNode.remove();
  var index = remove.target.getAttribute("index");
  ul.children[index].remove();
  pul.children[index].remove();
  i = i - 1;
}

// select value function
function indexFunc(event, selectvalue) {
  var index = event.target.getAttribute("index");
  ul.children[index].classList = `link ${selectvalue}`;
  ul.children[index].innerText = `${selectvalue}`;
  pul.children[index].classList = `link ${selectvalue}`;
  pul.children[index].innerText = `${selectvalue}`;
}

const add = document.querySelector(".add");

const links_container = document.querySelector(".links_container");

// create link function

function addLink() {
  i = i + 1;
  //   main div
  let linkbox = document.createElement("div");
  linkbox.className = "linkBox";

  //   link head
  let head = document.createElement("div");
  head.className = "linkhead";

  let linkhead = document.createElement("p");
  linkhead.className = "linkheadnum";
  linkhead.innerText = `Link#${i}`;
  head.appendChild(linkhead);

  let linkremove = document.createElement("p");
  linkremove.className = "linkremove";
  linkremove.innerText = "Remove";
  linkremove.attribute = "index";
  linkremove.setAttribute("index", i);
  linkremove.addEventListener("click", function (e) {
    removeEl(e);
  });
  head.appendChild(linkremove);

  // platform

  let platform = document.createElement("div");
  platform.className = "platform";

  let label = document.createElement("label");
  label.for = "platform";
  label.innerHTML = "platform";
  platform.appendChild(label);

  let select = document.createElement("select");
  select.id = "platform";
  select.attribute = "index";
  select.setAttribute("index", i - 1);
  select.addEventListener("change", function (e) {
    // platformChange(select.value);
    indexFunc(e, select.value);
  });
  var opts = ["GitHub", "YouTube", "Linkedin"];
  for (let i = 0; i < 3; i++) {
    let opt = document.createElement("option");
    opt.value = opts[i];
    opt.innerText = opts[i];
    select.appendChild(opt);
  }
  platform.appendChild(select);

  //   link
  let boxlink = document.createElement("div");
  boxlink.className = "boxlink";

  let label1 = document.createElement("label");
  label1.for = "boxlink";
  label1.innerText = "link";
  boxlink.appendChild(label1);

  let input = document.createElement("input");
  input.id = "link";
  input.type = "text";
  input.name = "link";
  input.attribute = "index";
  input.setAttribute("index", i - 1);
  input.addEventListener("input", function (e) {
    inputFunc(e, input.value);
  });
  boxlink.appendChild(input);

  linkbox.appendChild(head);
  linkbox.appendChild(platform);
  linkbox.appendChild(boxlink);
  links_container.appendChild(linkbox);

  let a = document.createElement("a");
  a.className = "a";

  let li = document.createElement("li");
  li.className = `link `;

  a.appendChild(li);
  ul.appendChild(a);
  // pul.appendChild(li);
}

// add btn click func
add.addEventListener("click", function () {
  addLink();
  paddLink();
});

function profChangeFunc() {
  if (ul.childElementCount > 0) {
    document.querySelector(".inner_editer").style.display = "none";
    document.querySelector(".profContainer").style.display = "flex";
    document.querySelector(".previewContainer").style.display = "none";
  } else {
    alert("Atleast one link is requiered !");
  }
}

function linkChange() {
  document.querySelector(".profContainer").style.display = "none";
  document.querySelector(".inner_editer").style.display = "";
  document.querySelector(".previewContainer").style.display = "none";
}

const linkBtn = document.querySelector(".linkbtn");
const profileBtn = document.querySelector(".profile");
const nextBtn = document.querySelector(".nextbtn");
const savebtn = document.querySelector(".savebtn");
const preview = document.querySelector(".preview");
// linkBtn.onclick = linkChange();
// profileBtn.onclick = profChangeFunc();
// nextBtn.onclick = profChangeFunc();
linkBtn.addEventListener("click", function () {
  linkChange();
});

profileBtn.addEventListener("click", function () {
  profChangeFunc();
});

nextBtn.addEventListener("click", function () {
  profChangeFunc();
});

const activeinput = document.querySelectorAll("input");

activeinput.forEach((input) => {
  input.addEventListener("focus", function () {
    activeinput.forEach((e) => {
      e.classList.remove("active");
    });
    input.classList.add("active");
  });
});

let fname = document.getElementById("fname");
var farry = [];
fname.addEventListener("input", function () {
  document.querySelector(".name").innerHTML = fname.value;
  // document.querySelector(".name").innerHTML = fname.value;
});

let lname = document.getElementById("lname");
lname.addEventListener("input", function () {
  // farry.push(fname.value);
  document.querySelector(".name").innerHTML = `${fname.value} ${lname.value}`;
  document.querySelector(".pname").innerHTML = `${fname.value} ${lname.value}`;
});

let email = document.getElementById("email");

email.addEventListener("input", function () {
  document.querySelector(".email").innerHTML = email.value;
  document.querySelector(".pemail").innerHTML = email.value;
});

document.addEventListener("DOMContentLoaded", function () {
  let fileInput = document.getElementById("file");
  let previewContainer = document.querySelector(".prof");
  let previewImgContainer = document.querySelector(".pprof");

  fileInput.addEventListener("change", function () {
    previewContainer.innerHTML = ""; // Clear previous image, if any

    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        const img = document.createElement("img");
        img.src = reader.result;
        img.className = "profimg";
        previewContainer.appendChild(img);
        const img2 = document.createElement("img");
        img2.src = reader.result;
        img2.className = "profimg";
        previewImgContainer.appendChild(img2);
      };

      reader.readAsDataURL(file);
    }
  });
});

function prevChangeFunc() {
  if (lname.value === "" || fname.value === "" || email.value === "") {
    alert("Fillout all the inpyt fields");
  } else {
    document.querySelector(".profContainer").style.display = "none";
    document.querySelector(".inner_editer").style.display = "none";
    document.querySelector(".previewContainer").style.display = "flex";
  }
}

savebtn.addEventListener("click", function () {
  prevChangeFunc();
});

preview.addEventListener("click", function () {
  prevChangeFunc();
});

const back = document.querySelector(".back");

back.addEventListener("click", function () {
  linkChange();
});

function paddLink() {
  let a = document.createElement("a");
  a.className = "a";
  a.attribute = "index";
  a.setAttribute("index", i - 1);

  let li = document.createElement("li");
  li.className = `link `;

  a.appendChild(li);
  pul.appendChild(a);
}
