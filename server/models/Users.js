
module.exports=(sequelize,DataTypes) =>{

    const Users =sequelize.define ("Users", {
              
          firstame: {
            type:DataTypes.STRING,
            allowNull:false,
            
          },
          lastname: {
            type:DataTypes.STRING,
            allowNull:false,
          },
          email: {
            type:DataTypes.STRING,
            allowNull:false,
          },
         
          role: {
            type:DataTypes.STRING,
            enum: ["admin", "teacher", "students"],
            allowNull:false,
          },

          password: {
            type:DataTypes.STRING,
            allowNull:false,
          },
              
     });

      return Users ;
    
}