import { Router } from 'express';
import { db } from '../../models';
 
const router = Router();

const { department } = db;

router.get("/add", (req, res) =>
    res.render('department', { action: "/api/department/add", isUpdating: false, })
);

router.post("/add", (req, res) => {
  console.log(req.body);
  const addDepartment = new department({
    department_name: req.body.department,
  });

  addDepartment.save(err => {
    if (err) return res.render(err)

    res.redirect('/api/department/');
  });

});

router.get('/', (req, res, next) => {
  try {
    department.find((err, department) => res.render('index', { department }));
  } catch(err) {
    res.send(500);
  }
});


router.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  department.findById(id, (err, department) => {

    if (err) return res.render(err);

    res.render('department', {
      action: `/api/department/edit/${id}`,
      department_name: department.department_name,
      isUpdating: true
    });
    
  });
});

router.post("/edit/:id", (req, res) => {
  department.updateOne({ 
    _id: req.params.id 
  }, 
  {
    department_name: req.body.department
  }, err => {
    if (err) return res.render(err);
    res.redirect('/api/department/');
  })

});

router.post('/delete/:id', (req, res) => {
  department.findById(req.params.id, (err, department) => {
    if (err) return res.render(err)
    department.remove()
    res.redirect('/api/department/')
  })
});


export default router;
