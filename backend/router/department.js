export const apiDepartment = (app, db) => {
    app.get( "/department/add", (req, res) =>
        res.render('department', { action: "/department/add" })
    );

    app.post( "/department/add", (req, res) => {
      db.department.create({
        department_name: req.body.department
      })
      .then(() => res.redirect('/'))
      .catch( err => console.log(err))
    });
    
    app.get('/', (req, res) => {
      db.department.findAll().then(department => res.render('index', { department }));
    });


    app.get("/department/edit/:id", (req, res) => {
      res.render('department', {
        action: `/department/add/${req.params.id}`
      })
    });

    app.post("/department/edit/:id", (req, res) => {
      db.department.update({
        department_name: req.body.department
      },
      {
        where: { id: req.params.id }
      })
      .then(() => res.redirect('/'))
      .catch( err => console.log(err))
    });

    app.post('/department/delete/:id', (req, res) => {
      db.department.destroy({
        where: {
          id: req.params.id
        }
      }).then(() => res.redirect('/'))
    });
  }