import sequelize from "../../dbconfig/dbconfig";
import {DataTypes} from "sequelize";
import Album from "../../Album/model";

const casi = sequelize.define('casi', {
    casi_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
);
casi.hasMany(Album,{
    sourceKey:"casi_id",
    foreignKey:"casi_id"
})
export default casi;