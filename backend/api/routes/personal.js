import { Router } from 'express';
import { db } from '../../models';
 
const router = Router();

const { personal } = db;
console.log('personal', personal)

router.get( "/all", (req, res) =>
  personal.findAll().then((personals) => res.render('personals', { personals }))
);

router.get( "/add/:id", (req, res) => {
  const { params: id } = req;
  res.render('personal', { action: `/api/add/personal/${id}` })
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
      res.redirect('/api/department')
  });

});

export default router;