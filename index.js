// SCRIPT FOR SHOWING HOME AND PROJECT SECTION
const homeBtn = document.getElementById("homeBtn")
const homeCon = document.getElementById("home-sec")

const projectCon = document.getElementById("project-sec")
const projectBtn = document.getElementById("project-btn")

homeBtn.addEventListener("click", () => {
    homeCon.style.display = "grid"
    projectCon.style.display = "none"
})

projectBtn.addEventListener("click", () => {
    homeCon.style.display = "none"
    projectCon.style.display = "grid"
})

// SCRIPT FOR SHOWING PROJECT CATEGORY
const fullStackBtn = document.getElementById("f-stack-btn")
const frontEndBtn = document.getElementById("f-end-btn")
const appDevBtn = document.getElementById("a-dev-btn")

const fStackCon = document.getElementById("full-stack-con")
const fEndCon = document.getElementById("front-end-con")
const aDevCon = document.getElementById("app-dev-con")

function showfstackCon () {
    fStackCon.style.display = "grid"
    fEndCon.style.display = "none"
    aDevCon.style.display = "none"
}

function showfEndCon () {
    fStackCon.style.display = "none"
    fEndCon.style.display = "grid"
    aDevCon.style.display = "none"
}

function showaDevCon () {
    fStackCon.style.display = "none"
    fEndCon.style.display = "none"
    aDevCon.style.display = "grid"
}
