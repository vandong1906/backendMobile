import {DataTypes, Optional} from "sequelize";
import sequelize from '../../dbconfig/dbconfig'
import Music from "../../music/model";
interface Album {
    id: number;
    name: string;
}
const Album = sequelize.define('album', {
    album_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
   name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
);
Album.hasMany(Music,{
    sourceKey:"album_id",
    foreignKey:"album_id"
})
export default Album;