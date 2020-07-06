import httpService from "@/providers/httpService";

const startApi = {
    getArchive: function () {
        return new Promise<any>(resolve => {
            const t = Date.parse(new Date().toString());
            httpService.get("https://bgmlist.com/tempapi/archive.json?__t=" + t).then(req => {
                resolve(req);
            }).catch(err => {
                throw err;
            });
        });
    },
    getBangumi: function (year: string, month: string): Promise<any> {
        const t = Date.parse(new Date().toString());
        const promise = new Promise<any>(resolve => {
            httpService.get("https://bgmlist.com/tempapi/bangumi/"+year+"/"+month+"/json?__t=" + t).then(req => {
                resolve(req);
            }).catch(err => {
                throw err;
            });
        });
        return promise;
    }
};

export default startApi;
