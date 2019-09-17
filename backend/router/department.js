export const apiDepartment = (app, db) => {
    const { department } = db;
    app.get( "/department/add", (req, res) =>
        res.render('department', { action: "/department/add", isUpdating: false, })
    );

    app.post( "/department/add", (req, res) => {
      const addDepartment = new department({
        department_name: req.body.department,
      });

      addDepartment.save(err => {
        if (err) return res.render(err)
        res.redirect('/')
      });

    });
    
    app.get('/', (req, res) => {
      department.find((err, department) => res.render('index', { department }));
    });


    app.get("/department/edit/:id", (req, res) => {
      const { id } = req.params;

      department.findById(id, (err, department) => {

        if (err) return res.render(err);

        res.render('department', {
          action: `/department/edit/${id}`,
          department_name: department.department_name,
          isUpdating: true
        });
        
      });
    });

    app.post("/department/edit/:id", (req, res) => {
      department.updateOne({ 
        _id: req.params.id 
      }, 
      {
        department_name: req.body.department
      }, err => {
        if (err) return res.render(err);
        res.redirect('/');
      })

    });

    app.post('/department/delete/:id', (req, res) => {
      department.findById(req.params.id, (err, department) => {
        if (err) return res.render(err)
        department.remove()
        res.redirect('/')
      })
    });
  }