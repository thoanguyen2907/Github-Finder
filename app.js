//Init Github
const github = new Github;
//Init UI 
const ui = new UI;
//Search input 
let searchUser = document.getElementById('searchUser');
//Search Input User Listener 
searchUser.addEventListener('keyup',(e)=>{
    //get input text 
    let userText = e.target.value; 
    if(userText !== ''){
        //make http call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message==='Not Found'){
                //show alert
                ui.showAlert('User is not found','alert alert-danger')
            }
            else {
                //show profile 
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)
          }
        })}
     else {
        //clear profile
        ui.clearProfile()
    }
})