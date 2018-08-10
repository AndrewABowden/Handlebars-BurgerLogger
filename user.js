module.exports = function(sequelize, dataType) {
    var User = sequelize.define("user", {
        email: dataType,
        
    })
}