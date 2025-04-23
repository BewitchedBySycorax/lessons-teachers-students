import {
  Model, Table, Column,
  DataType, PrimaryKey, AutoIncrement, BelongsToMany
} from 'sequelize-typescript'
// import { Lesson, LessonTeacher } from './index.js'
import models from './index.js'
import type { InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'

@Table({ tableName: 'teachers', timestamps: false })
export class Teacher extends Model<InferAttributes<Teacher>, InferCreationAttributes<Teacher>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: CreationOptional<number>

  @Column(DataType.STRING(10))
  declare name: string

  // @BelongsToMany(() => Lesson, () => LessonTeacher)
  // declare lessons: Lesson[]

  @BelongsToMany(() => models.Lesson, () => models.LessonTeacher)
  declare lessons: typeof models.Lesson[]
}
