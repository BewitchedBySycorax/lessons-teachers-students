import {
  Model, Table, Column, DataType,
  PrimaryKey, AutoIncrement, BelongsToMany, AllowNull,
  Default
} from 'sequelize-typescript'
// import { Teacher, Student, LessonTeacher, LessonStudent } from './index.js'
import models from './index.js'
import type { InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'

@Table({ tableName: 'lessons', timestamps: false })
export class Lesson extends Model<InferAttributes<Lesson>, InferCreationAttributes<Lesson>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: CreationOptional<number>

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  declare date: string

  @Column(DataType.STRING)
  declare title: string

  @Default(0)
  @Column(DataType.INTEGER)
  declare status: number

  // @BelongsToMany(() => Teacher, () => LessonTeacher)
  // declare teachers: Teacher[]

  // @BelongsToMany(() => Student, () => LessonStudent)
  // declare students: (Student & { LessonStudent: { visit: boolean } })[]

  @BelongsToMany(() => models.Teacher, () => models.LessonTeacher)
  declare teachers: typeof models.Teacher[]

  @BelongsToMany(() => models.Student, () => models.LessonStudent)
  declare students: (typeof models.Student & { LessonStudent: { visit: boolean } })[]
}
