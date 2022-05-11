console.log('hello');

const saveBtn = document.querySelector('#join_btn');

saveBtn.onclick = function () {
    this.innerHTML = `<div class="loader"></div>`;
    setTimeout(() => {
        this.style = 'width: 100%; opacity: 1; transition: ease-in .5s ';
    });
    setTimeout(() => {
        this.innerHTML = 'THANK YOU! WE WILL KEEP YOU NOTIFIED';
        // this.innerHTML.style = 'transition: all 0.5s ease-in;';
        // this.style =
        //     'width: 100%; opacity: 1; transition: all 0.5s ease-in; color: rgba(255, 255, 255);';
    }, 2000);
    setTimeout(() => {
        this.innerHTML = 'JOIN THE WAITLIST';
        // this.innerHTML.style = 'transition: all 0.5s ease-in;';
        this.style =
            'width: 45.49%; opacity: 1; transition: all 0.5s ease-in; color: rgba(255, 255, 255);';
    }, 4000);
};
