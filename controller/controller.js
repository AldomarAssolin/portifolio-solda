

module.exports = class ToughtController{
    static async showHome(req,res){
        res.render('index')
    }

    static async showDashboard(req,res){
        res.render('dashboard')
    }
}