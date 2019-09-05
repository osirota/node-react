export const apiPersonal = (app, db) => {
  app.get( "/personals", (req, res) =>
    db.personal.findAll().then((personals) => res.render('personals', { personals }))
  );
  
  app.get( "/personal/add/:id", (req, res) =>
    res.render('personal', { action: `/add/personal/${req.params.id}` })
  );
  app.post( "/personal/add/:id", (req, res) => {
    const {
      first_name,
      last_name,
      email,
      salary,
      datetime
    } = req.body;

    const { id } = req.params;

    db.personal.create({
      personal_firstName: first_name,
      personal_lastName: last_name,
      personal_email: email,
      personal_salary: salary,
      personal_date_started_work: datetime,
      departmentId: id,
    })
    .then(() => res.redirect('/'))
    .catch( err => console.log(err))
  });
}