/** hide divs */

window.addEventListener("scroll", function() {showFunction()});

function showFunction() {
    console.log('entrou')
    const scrollPos = window.pageYOffset
    const width = window.innerWidth
    let showSectionProcedure = document.querySelector('#procedure')
    let showSectionExperience = document.querySelector('#experience')
    let showSectionLearning = document.querySelector('#learning')
    let showSectionSoftSkills = document.querySelector('#softSkills')
    let showSectionHardSkills = document.querySelector('#hardSkills')
    let showSectionContact = document.querySelector('#contact')

    if(width <= 575){
        scrollPos < 2870 ? showSectionExperience.style.display = 'none' : showSectionExperience.style.display = 'block'
        scrollPos < 4200 ? showSectionLearning.style.display = 'none' : showSectionLearning.style.display = 'block'
        scrollPos < 5800 ? showSectionSoftSkills.style.display = 'none' : showSectionSoftSkills.style.display = 'block'

    }else if(width > 575 && width < 992){
        scrollPos < 100 ? showSectionProcedure.style.display = 'none' : showSectionProcedure.style.display = 'block'
        scrollPos < 1450 ? showSectionExperience.style.display = 'none' : showSectionExperience.style.display = 'block'
        scrollPos < 2500 ? showSectionLearning.style.display = 'none' : showSectionLearning.style.display = 'block'
        scrollPos < 3800 ? showSectionSoftSkills.style.display = 'none' : showSectionSoftSkills.style.display = 'block'
    }else{
        scrollPos < 10 ? showSectionProcedure.style.display = 'none' : showSectionProcedure.style.display = 'block'
        scrollPos < 1000 ? showSectionExperience.style.display = 'none' : showSectionExperience.style.display = 'block'
        scrollPos < 2000 ? showSectionLearning.style.display = 'none' : showSectionLearning.style.display = 'block'
        scrollPos < 3200 ? showSectionSoftSkills.style.display = 'none' : showSectionSoftSkills.style.display = 'block'
        scrollPos < 5200 ? showSectionHardSkills.style.display = 'none' : showSectionHardSkills.style.display = 'block'
        scrollPos < 5200 ? showSectionContact.style.display = 'none' : showSectionContact.style.display = 'block'
    }
}

console.log(innerWidth)
console.log(pageYOffset)