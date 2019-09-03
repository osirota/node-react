export const apiPersonal = (app, db) => {
  app.get( "/personals", (req, res) =>
    db.post.findAll().then( (result) => res.json(result) )
  );
  
  app.get( "/personal/add/:id", (req, res) =>
    res.render('personal', { action: `/add/personal/${req.params.id}` })
  );
  app.post( "/personal/add/:id", (req, res) => {
    db.personal.create({
      personal_firstName: req.body.first_name,
      personal_lastName: req.body.last_name,
      personal_email: req.body.email,
      personal_salary: req.body.salary,
      personal_date_started_work: req.body.datetime,
      personal_department_id: req.params.id,
    })
    .then(() => res.redirect('/'))
    .catch( err => console.log(err))
  });
}