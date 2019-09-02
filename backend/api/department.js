export const apiDepartment = (app, db) => {
    app.get( "/department/add", (req, res) =>
        res.render('index')
    );

    app.post( "/department/add", (req, res) =>
      console.log(req, res)
    );
    
  }