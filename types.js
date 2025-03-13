//CRUD

const data = {
  course: {
    title: "Основы Fron-end разработки",
    lessons: [
      { id: 1, title: "Введение в JavaScript", isDone: true },
      { id: 2, title: "Операторы, сравнение, ветвление", isDone: false },
      { id: 3, title: "Функции", isDone: false },
    ],
  },

  render() {
    console.log(data.course);
  },

  deleteLesson(lessonId) {
this.course.lessons = this.course.lessons.filter(1 => 1.id !== lessonId)
this.render()
  }
  addLesson(){
    const newLesson = {id: 1, title: "Enter JS" , isDone: false}
    this.course.lessons.push(newLesson)
    this.render()
  }
}; 
