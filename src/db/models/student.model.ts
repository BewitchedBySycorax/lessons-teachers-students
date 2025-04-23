import {
  Model, Table, Column,
  DataType, PrimaryKey, AutoIncrement, BelongsToMany
} from 'sequelize-typescript'
// import { Lesson, LessonStudent } from './index.js'
import models from './index.js'
import type { InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'

@Table({ tableName: 'students', timestamps: false })
export class Student extends Model<InferAttributes<Student>, InferCreationAttributes<Student>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: CreationOptional<number>

  @Column(DataType.STRING(10))
  declare name: string

  // @BelongsToMany(() => Lesson, () => LessonStudent)
  // declare lessons: Lesson[]

  @BelongsToMany(() => models.Lesson, () => models.LessonStudent)
  declare lessons: typeof models.Lesson[]
}
