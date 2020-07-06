const storageService = {
    /**
     * 设置登录token
     * @param authorization 登录token
     */
    setAuthorization: function (authorization: string) {
        localStorage.setItem('Authorization', authorization);
    },
    /**
     * 获得登录token
     */
    getAuthorization: function (): string {
        const authorization = localStorage.getItem('Authorization');
        return typeof authorization === "string" ? authorization :'';
    }

}

export default storageService;