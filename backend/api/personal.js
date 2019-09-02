export const apiPersonal = (app, db) => {
  app.get( "/personals", (req, res) =>
    db.post.findAll().then( (result) => res.json(result) )
  );
}