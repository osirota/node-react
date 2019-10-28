import { Router } from 'express';
import { db } from '../../models';
 
const router = Router();

const { personal } = db;

router.get( "/all", (req, res) =>
  personal.find((err, personals) => res.render('personals', { personals }))
);

router.get( "/add/:id", (req, res) => {
  const { params: id } = req;
  res.render('personal', { 
    action: `/api/add/personal/${id}`,
    isUpdating: false,
    isErrors: false,
    textErrors: ''
  })
});
router.get( "/show/:id", (req, res) => {
  const { params: { id } } = req;
  personal.find( {department_id: id} , (err, personals) => res.render('personals', { personals }))
});

router.post( "/add/:id", (req, res) => {
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
  const user = {
    personal_firstName: first_name,
    personal_lastName: last_name,
    personal_email: email,
    personal_salary: salary,
    personal_date_started_work: datetime,
    department_id: id,
  }
  const addPersonal = new personal(user);

  addPersonal.save(err => {
      if (err) { 
        return res.render('personal', { 
          action: `/api/add/personal/${id}`,
          isUpdating: true,
          isErrors: true,
          textErrors: 'email occupied',
          fields: user
        })
      }
      res.redirect('/api/department')
  });

});
router.post('/delete/:id', (req, res) => {
  personal.deleteOne({ _id: req.params.id }).then(() => res.redirect('/api/department'));
});

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  personal.findById(id, (err, user) => {
    if (err) return res.render(err);

    res.render('personal', {
      action: `/api/personal/edit/${id}`,
      fields: user,
      isUpdating: true,
      isErrors: false,
      textErrors: ''
    });
    
  });
});

router.post("/edit/:id", (req, res) => {
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
  const user = {
    personal_firstName: first_name,
    personal_lastName: last_name,
    personal_email: email,
    personal_salary: salary,
    personal_date_started_work: datetime,
  }
  console.log(id)
  personal.updateOne({ 
    _id: id 
  }, 
    user
  , err => {
    if (err) {
      console.log(err)
      return res.render('personal', {
        action: `/api/personal/edit/${req.params.id}`,
        fields: user,
        isUpdating: true,
        isErrors: true,
        textErrors: 'email occupied'
      });
    };
    res.redirect('/api/department/');
  })

});
export default router;
