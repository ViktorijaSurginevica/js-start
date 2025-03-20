//CRUD
//C
//R
//U
//D
// model
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

// view
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

  courseElement.append(CourseTitle(course.title), LessonsList(course.lessons));
  return courseElement;
}

function CourseTitle(title) {
  const rootElement = document.createElement("h1");
  rootElement.classList.add("title");
  rootElement.textContent = title;
  return rootElement;
}

function LessonsList(lessons) {
  const rootElement = document.createElement("ol");
  rootElement.classList.add("list");
  for (let i = 0; i < lessons.length; i++) {
    rootElement.append(Lesson(lesson[i]));
  }
  return rootElement;
}

function Lesson(lesson) {
  const rootElement = document.createElement("li");
  rootElement.classList.add("item");
  if (lesson.isDone === true) {
    rootElement.ELEMENT_NODE.classList.add("done");
  }
  rootElement.textContent = lesson.title;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  rootElement.append(deleteBtn);
  return rootElement;
}

function AddForm() {
  const rootElement = document.createElement("form");
  const inputElement = document.createElement("input");
  const addBtn = document.createElement("button");
  addBtn.textContent;
}
