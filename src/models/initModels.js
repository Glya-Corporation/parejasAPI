const { Users, Relations, LikeList, DontLikeList, PendingList } = require('./index');

const initModels = () => {
  // Un usuario tiene una relacion, este usuario invita a su pareja
  // Esta relacion es de uno a uno, ya que este user solo puede enviar una invitacion
  Users.hasOne(Relations, { as: 'relationHost', foreignKey: 'user_host' });
  Relations.belongsTo(Users, { as: 'userHostR', foreignKey: 'user_host' });

  // Un usuario tiene una relacion, este usuario recibe una invitacion de su pareja
  // Esta relacion es de uno a uno, ya que este user solo puede recibir una invitacion
  Users.hasOne(Relations, { as: 'relationGuest', foreignKey: 'user_guest' });
  Relations.belongsTo(Users, { as: 'userGuestR', foreignKey: 'user_guest' });

  // Un usuario tiene muchos pendientes y comparte con su pareja
  // Este pendiente solo pertenece a la pareja nadie mas puede ver
  Users.hasMany(PendingList, { as: 'pendingHost', foreignKey: 'user_host' });
  PendingList.belongsTo(Users, { as: 'userHostP', foreignKey: 'user_host' });

  // Este usuario recibe el pendiente ya que paricipa en la relacion
  // Este pendiente solo pertenece a la pareja nadie mas puede ver
  Users.hasMany(PendingList, { as: 'pendingGuest', foreignKey: 'user_guest' });
  PendingList.belongsTo(Users, { as: 'userGuestP', foreignKey: 'user_guest' });

  // Un usuario puede tener muchas cosas que le gusten
  // Esta lista es visible por el propietario y su pareja
  Users.hasMany(LikeList, { as: 'iLike', foreignKey: 'user_id' });
  LikeList.belongsTo(Users, { as: 'owner', foreignKey: 'user_id' });

  // Un usuario puede tener muchas cosas que no le gusten
  // Esta lista es visible por el propietario y su pareja
  Users.hasMany(DontLikeList, { as: 'iDontLike', foreignKey: 'user_id' });
  DontLikeList.belongsTo(Users, { as: 'owner', foreignKey: 'user_id' });
};

module.exports = initModels;
