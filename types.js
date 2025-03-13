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
    this.course.lessons = this.course.lessons.filter((l) => l.id !== lessonId);
    this.render();
  },
  addLesson(lessonTitle) {
    const newLesson = { id: 4, title: "Enter JS", isDone: false };
    this.course.lessons.push(newLesson);
    this.render();
  },

  updateLessonStatus(lessonId){
   const lesson = this.course.lessons.find(l => l.id === lessonId)
   lesson.isDone = !lesson.isDone
   this.render()
  }

  updateLessonTitle(lessonId, newTitle){
    const lesson = this.course.lessons.find(l => l.id === lessonId)
    lesson.title = newTitle
    this.render()
  }
};
