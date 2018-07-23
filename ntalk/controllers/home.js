
module.exports = (app) => {
  const HomeController = {
    index: function(req, res) {
      res.render('home/index');
    },
    login: (req, res) => {
      let usuario = req.body.usuario.email,
        nome = req.body.usuario.nome;
      if(email && nome) {
        let usuario = req.body.usuario;
        usuario['contatos'] = [];
        req.session.usuario = usuario;
        res.redirect('/contatos');
      } else {
        res.redirect('/');
      }
    },
    logout: (req, res) => {
      req.session.destroy();
      res.redirect('/');
    }
  };
  return HomeController;
};