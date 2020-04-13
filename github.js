class Github{
    constructor(){
        this.client_id = '2624353d82461fabf9d8';
        this.client_secret='0cc765ea9739516e836e7d29c4b74146d06ad131';
        this.repos_count = 5; 
        this.repos_sort = 'created:asc'
    }
    async getUser(user){
        let profileResponse = 
        await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        let reposResponse = 
        await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
     
        let profile = await profileResponse.json();
        let repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}
