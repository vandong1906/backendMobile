import {DataTypes, Model, Optional} from "sequelize";
import sequelize from "../../dbconfig/dbconfig";
import Music from "../../music/model";
import User from "../../user/model";
const Danhsach =sequelize.define("Danhsach", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
})
Music.hasMany(Danhsach, {
    sourceKey:"id_song",
    foreignKey:"id_song",
})
User.hasMany(Danhsach,{
    sourceKey:"user_id",
    foreignKey:"user_id",
})
export default Danhsach