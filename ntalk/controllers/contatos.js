module.exports = app => {
    const ContatosController = {
        index: (req, res) => {
            let { usuario } = req.session;
            let { contatos } = usuario;
            res.render('contatos/index', {
                usuario,
                contatos
            });
        },
        create: (req, res) => {
            let { contato } = req.body;
            let { usuario } = req.session;
            usuario.contatos.push(contato);
            res.redirect('/contatos');
        },
        show: (req, res) => {
            let { id } = req.params.id;
            let { usuario } = req.session;
            let { contato } = usuario.contatos[id];
            res.render('contatos/show', {
                id,
                contato
            });
        },
        edit: (req, res) => {
            let { id }= req.params;
            let { usuario } = req.session;
            let { contato } = usuario.contatos[id];
            res.render('contatos/edit', {
                id,
                contato, 
                usuario
            });
        },
        update: (req, res) => {
            let { contato } = req.body;
            let { usuario } = req.session;
            usuario.contatos[req.params.id] = contato;
            res.redirect('/contatos');
        },
        destroy: (req, res) => {
            let { usuario } = req.session;
            let { id } = req.params;
            usuario.contatos.splice(id, 1);
            res.redirect('/contatos');
        }
    };
    return ContatosController;
}