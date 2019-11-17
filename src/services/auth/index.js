import ROUTER from 'router'

export default {
    user: null,
    RegisteredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        return user
    },
    register(email, password) {
        if (email == '' || password == '') {
            ROUTER.push("/createaccount")
        } else {
            this.RegisteredUser.push({
                Password: password,
                Email: email
            });
            ROUTER.push("/boarderdashboard");
        }
    },
    login(email, password) {
        for (let i = 0; i < this.RegisteredUser.length; i++) {
            if (this.RegisteredUser[i].Email === email && this.RegisteredUser[i].Password === password) {
                ROUTER.push('/boarderdashboard')
                return this.RegisteredUser[i]

            }
        }
        return null;
    },
    // saveInfo(username,email){
    //     sessionStorage.setItem("Username", username),
    //     sessionStorage.setItem("Email", email),
    //     ROUTER.push('/');
    // }
}