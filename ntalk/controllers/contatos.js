module.exports = app => {
    const ContatosController = {
        index: (req, res) => {
            let usuario = req.session.usuario;
            let params = {usuario: usuario};
            res.render('contatos/index', params);
        },
    };
    return ContatosController;
}