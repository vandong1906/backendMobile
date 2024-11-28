import { DataTypes} from 'sequelize';
import sequelize from "../../dbconfig/dbconfig";

const User = sequelize.define("User", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
});
export default User;
