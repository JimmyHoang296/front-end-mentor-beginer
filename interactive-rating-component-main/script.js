function submit() {
    var rating
    var contener = document.querySelector('.wrapper')
    var starCount = document.querySelector('.star-count')
    var btns = document.getElementsByTagName('input')
    console.log (btns)
    btns = [...btns]
    btns.forEach(btn => {
        if (btn.checked) {
            console.log (btn)
            rating = btn.id
            contener.classList.add('submitted')
            starCount.innerHTML = `You selected ${rating} out of 5`
            return
        }
    });
}

var submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click', submit)