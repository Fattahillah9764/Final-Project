let cekHeader = document.getElementById("header-details-challenge")

function handleSubmit(event) {
    // console.log(event, "==> ini event");
    
    event.preventDefault()    // untuk matiiin kebiasaan dari submit
    // console.log("aku terpanggil");

    const valueNameUser = document.getElementById("name-user-challenge").value
    //console.log(valueNameUser);
    const fullNameUser = document.getElementById("fullname-user-challenge").innerHTML = valueNameUser
    // const roleUser = document.getElementById("role-user").innerHTML
    // console.log(fullNameUser);

    const valueRole = document.getElementById("role-challenge").value
    const fullrole = document.getElementById("fullrole-challenge").innerHTML = valueRole

    const valueAvailability = document.getElementById("available-challenge").value
    const fullavailable = document.getElementById("fullavailable-challenge").innerHTML = valueAvailability

    const valueAge = document.getElementById("age-challenge").value
    const fullage = document.getElementById("fullage-challenge").innerHTML = valueAge

    const valuelocation = document.getElementById("location-challenge").value
    const fulllocation = document.getElementById("fulllocation-challenge").innerHTML = valuelocation

    const valueexperience = document.getElementById("experience-challenge").value
    const fullexperience = document.getElementById("fullexperience-challenge").innerHTML = valueexperience

    const valueemail = document.getElementById("email-challenge").value
    const fullemail = document.getElementById("fullemail-challenge").innerHTML = valueemail

}