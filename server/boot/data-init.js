/**
 * Created by jadoux on 06/05/2017.
 */
module.exports = function (app) {
  let Role = app.models.Role;
  let Contact = app.models.customer;
  let RoleMapping = app.models.RoleMapping;

  let userAdminlist = [
    {username : 'jadoux', firstname: 'Jérémy', lastname: 'Adoux', email: 'jadoux@visiativ.com', password: 'microbe'}
  ];

  Role.findOrCreate({name: 'AdminRole'}, {name: 'AdminRole'}, function (err, role) {
    if (err) throw err;

    userAdminlist.forEach(function (newUser) {
      Contact.findOrCreate({email: newUser.email}, newUser, function (err, user) {
        if (err) throw err;

        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: user.id
        }, function (err, principal) {
          if (err) throw err;
        });
      });
    });
  });
};
