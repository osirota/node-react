import { Router } from 'express';
import { db } from '../../models';
import auth from '../middleware/auth';

const router = Router();

const { department } = db;

router.get("/add", (req, res) =>
    res.render('department', { 
      action: "/api/department/add",
      isUpdating: false,
      isErrors: false,
      textErrors: ''
     })
);

router.post("/add", (req, res) => {
  try {
    const addDepartment = new department({
      department_name: req.body.department,
    });
  
    addDepartment.save(err => {
      if (err) return res.status(500).json(err)
  
      res.redirect('/api/department/');
    });
  } catch (err) {
    res.json(err);
  } 

});

router.get('/', auth, (req, res, next) => {
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
      isUpdating: true,
      isErrors: false,
      textErrors: ''
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
    if (err) {
      return res.render('department', {
        action: `/api/department/edit/${req.params.id}`,
        department_name: req.body.department,
        isUpdating: true,
        isErrors: true,
        textErrors: 'Name occupied'
      });
    };
    res.redirect('/api/department/');
  })

});

router.post('/delete/:id', (req, res) => {
  department.findById(req.params.id, (err, departments) => {
    if (err) return res.render(err)
    departments.remove()
    res.redirect('/api/department/')
  })
});


export default router;
