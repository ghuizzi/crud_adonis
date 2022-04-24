import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Course from "App/Models/Course"

export default class CoursesController {
    public async index({response}: HttpContextContract ){
        const courses = await Course.query().select('*').from( 'courses')
        return response.status(200).json(courses)
    }
    public async show({params, response} : HttpContextContract){
      const course = await Course.find(params.id)
      
      if (course) {
        return response.status(200).json(course)
      } else {
        return { message: `Course has id=${params.id} is not existed`}
      }

    }
    public async store({request, response}: HttpContextContract ) {
      const { course_name, duration, price } = request.body()
      const data = { course_name, duration, price }
        const course = await Course.create(data)
        return response.status(200).json(course)

    } 
    public async update({ params, request, response}: HttpContextContract ){
      const course = await  Course.find(params.id)
      const  data =  request.only(['course_name', 'duration', 'price'])
      
      if(course){
        course.merge(data)
        course.save
        return response.status(200).json(course)
      }else{
        return{message : `el curso id=${params.id} no existe`}
      }
    }
    public async delete({ params, response }:HttpContextContract){
      const course = await Course.find(params.id)

      if(course){
        course.delete()
        return response.status(200).json({message : `el curso id=${params.id} se elimino`})
      }else{
        return{message : `el curso id=${params.id} no existe`}
      }


    }
}
