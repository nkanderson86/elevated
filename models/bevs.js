'use strict'

module.exports = function (sequelize, DataTypes) {
  const bev = sequelize.define('bev', {
    bev_category: {
      type: DataTypes.STRING
    },
    bev_type: {
      type: DataTypes.STRING
    },
    bev_name: {
      type: DataTypes.STRING
    },
    bev_abv: {
      type: DataTypes.STRING
    },
    bev_ibu: {
      type: DataTypes.STRING
    },
    bev_country: {
      type: DataTypes.STRING
    },
    bev_maker: {
      type: DataTypes.STRING
    },
    bev_descr: {
      type: DataTypes.TEXT
    },
    bev_organic: {
      type: DataTypes.BOOLEAN
    },
    bev_img: {
      type: DataTypes.TEXT
    },
    bev_average_rating: {
      type: DataTypes.STRING
    }
  })
  bev.associate = function (db) {
    bev.belongsToMany(db.User, {
      through: 'WishlistBev'
    })
    bev.belongsToMany(db.User, {
      as: 'triedUser',
      through: 'TriedBev'
    })
  }
  return bev
}
