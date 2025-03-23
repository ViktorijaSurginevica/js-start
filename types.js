//CRUD
//C
//R
//U
//D

const data = {
  course: {
    title: "Основы Fron-end разработки",
    lessons: [
      { id: crypto.randomUUID(), title: "Введение в JavaScript", isDone: true },
      {
        id: crypto.randomUUID(),
        title: "Операторы, сравнение, ветвление",
        isDone: false,
      },
      { id: crypto.randomUUID(), title: "Функции", isDone: false },
    ],
  },
  render() {
    // console.log(this.course);
    document.body.innerHTML = "";
    const courseUI = CourseUI(this.course);
    document.body.append(courseUI);
  },
  deleteLesson(lessonId) {
    this.course.lessons = this.course.lessons.filter((l) => l.id !== lessonId);
    this.render();
  },
  addLesson(lessonTitle) {
    const newLesson = {
      id: crypto.randomUUID(),
      title: lessonTitle,
      isDone: false,
    };
    this.course.lessons.push(newLesson);
    this.render();
  },
  updateLessonStatus(lessonId) {
    const lesson = this.course.lessons.find((l) => l.id === lessonId);
    lesson.isDone = !lesson.isDone;
    this.render();
  },
  updateLessonTitle(lessonId, newTitle) {
    const lesson = this.course.lessons.find((l) => l.id === lessonId);
    lesson.title = newTitle;
    this.render();
  },
};

data.render();

// {
//     title: "Основы Fron-end разработки",
//     lessosns: [
//         {id: crypto.randomUUID(), title: "Введение в JavaScript" , isDone: true},
//         {id: crypto.randomUUID(), title: "Операторы, сравнение, ветвление", isDone: false},
//         {id: crypto.randomUUID(), title: "Функции", isDone: false },
//     ]
// }

function CourseUI(course) {
  const courseElement = document.createElement("div");
  courseElement.classList.add("course");

  const courseTitleElement = document.createElement("h1");
  courseTitleElement.classList.add("title");
  courseTitleElement.textContent = course.title;

  const courseListElement = document.createElement("ol");
  courseListElement.classList.add("list");

  const lessons = course.lessons;

  for (let i = 0; i < lessons.length; i++) {
    const lessonElement = document.createElement("li");
    lessonElement.classList.add("item");
    lessonElement.textContent = lessons[i].title;
    courseListElement.append(lessonElement);
  }

  return courseElement;
}
