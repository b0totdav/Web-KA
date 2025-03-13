import { Sequelize } from "sequelize";
import { Op } from "sequelize";
const { DataTypes } = Sequelize;

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./database.sqlite",
	define: {
		timestamps: false,
	},
});

const Students = sequelize.define(
	"student",
	{
		student_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4, 20]
			}
		},
		favourite_class: {
			type: DataTypes.STRING,
            defaultValue:'Computer Science',
		},
		school_year: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
		},
        has_language_examination:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        }
	},
);

Students.sync({ alert: true })
	.then(() => {
		return Students.bulkCreate([
      { name: "Walter White", favourite_class: "Chemistry", school_year: 6, has_language_examination:false},
      { name: "John Wick", favourite_class: "Sport shooting", school_year: 13},
      { name: "Bill Gates", school_year: 10,},
      { name: "Mark Zuckerberg", school_year: 8},
      { name: "Keiichi Tsuchiya", favourite_class: "Delivery", school_year: 13, has_language_examination:false},
    ],
  );
	})
	.then((data) => {
		data.forEach((element) => {
      console.log(element.toJSON())
    })
	})
    .then(() =>{ 
        return Students.findAll({
        attributes:['name'],
        where: {
          [Op.or]: { favourite_class: "Computer Science", has_language_examination:true },
        },
      })})
    .then((data)=>{
        console.log(data);
    })
    .then(()=>Students.findAndCountAll({
        raw: true,
        group: ["school_year"],
    }))
    .then((data)=>{
        console.log(data);
    });
    