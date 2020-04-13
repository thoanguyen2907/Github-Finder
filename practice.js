 showAlert = (msg,className) =>  {
    const div = document.createElement('div');
    div.className=className;
    div.textContent = msg; 
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search')
    container.insertBefore(div,search);
    setTimeout(()=>div.remove(),2000)
}
clearAlert = () =>{
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
        currentAlert.remove()
    }
}
clearProfile = () => {
this.profile.innerHTML = ''
}


let searchUser = document.getElementById('searchUser'); 
searchUser.addEventListener('keyup',(e)=>{
    let userText = e.target.value; 
    if(userText !== ''){
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message === 'Not Found'){
                ui.showAlert('user is not found','alert alert-danger')
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)
            }
        })
    } else {
        ui.clearProfile()
    }
})