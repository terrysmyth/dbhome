// SHOW/HIDE CATEGORIES (genius)
const categories = document.getElementsByClassName("checkbox");
let categoryList = [];
const checkboxes = () => {
    categoryList = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].checked) {
            categoryList.push(categories[i].value)
            categories[i].parentElement.style.backgroundColor = "green";
        } else {
            categories[i].parentElement.style.backgroundColor = "#585858";
        }

    }
    if (categoryList.length == 2) {
        for (let i = 0; i < categories.length; i++) {
            if (!categories[i].checked) {
                categories[i].disabled = true;
            }
        }
    } else {
        for (let i = 0; i < categories.length; i++) {
            if (!categories[i].checked) {
                categories[i].disabled = false;
            }
        }
    }
    console.log(categoryList);

}

const loadSpring = () => {
    const honeyPot = document.getElementById("honey");
    const submit = document.getElementById("submit");

}
const spring = () => {
    submit.disabled = true;
}

// FILTER WRAP 
setInterval(() => {
    var filterWrap = document.getElementById("filterWrap");
    if (window.innerWidth > 800) {
        filterWrap.style.top = "-" + (filterWrap.clientHeight - 50) + "px";
    } else {
        filterWrap.style.top = "-" + (filterWrap.clientHeight) + "px";
    }
}, 1000);
