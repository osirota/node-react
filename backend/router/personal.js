export const apiPersonal = (app, db) => {
  const { personal } = db;
  app.get( "/personals", (req, res) =>
    personal.findAll().then((personals) => res.render('personals', { personals }))
  );
  
  app.get( "/personal/add/:id", (req, res) => {
    const { params: id } = req;
    res.render('personal', { action: `/add/personal/${id}` })
  }
  );
  app.post( "/personal/add/:id", (req, res) => {
    const {
      body: { 
        first_name,
        last_name,
        email,
        salary,
        datetime,
      },
      params: {
        id
      }
    } = req;
    
    const addPersonal = new personal({
      personal_firstName: first_name,
      personal_lastName: last_name,
      personal_email: email,
      personal_salary: salary,
      personal_date_started_work: datetime,
      department_id: id,
    });

    addPersonal.save(err => {
        if (err) return res.render(err)
        res.redirect('/')
    });

  });
}