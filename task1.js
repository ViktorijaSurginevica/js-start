// // Задача:
// // Создайте объект car, который будет содержать следующие свойства:

// // brand (марка автомобиля)
// // model (модель автомобиля)
// // year (год выпуска)
// // mileage (пробег)
// // Также добавьте метод getCarInfo, который будет возвращать строку с полной информацией о автомобиле в формате:

// // "Марка: [brand], Модель: [model], Год: [year], Пробег: [mileage] км"

// // let car = {
// //   brand: "Toyota",
// //   model: "Corolla",
// //   year: 2020,
// //   mileage: 15000,

// //   getCarInfo: function () {
// //     return `Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}, Пробег: ${this.mileage} км`;
// //   },
// // };

// // Вывод информации о автомобиле
// console.log(car.getCarInfo());

// // Создайте объект student, который будет представлять студента и иметь следующие свойства:

// // name (имя студента)
// // age (возраст студента)
// // courses (массив с названиями курсов, которые изучает студент)
// // Добавьте метод addCourse, который будет принимать название курса в качестве аргумента и добавлять его в массив courses. Также добавьте метод getInfo, который будет возвращать строку с информацией о студенте в формате:

// // "Имя: [name], Возраст: [age], Курсы: [courses]"

// // const student = {  
//     name: "Алексей",  
//     age: 20,  
//     courses: [],  

//     addCourse: function(course) {  
//         this.courses.push(course);  
//     },  

//     getInfo: function() {  
//         return `Имя: ${this.name}, Возраст: ${this.age}, Курсы: ${this.courses.join(", ")}`;  
//     }  
// };  

// // Добавляем курсы  
// student.addCourse("Математика");  
// student.addCourse("Программирование");  

// // Вывод информации о студенте  
// console.log(student.getInfo());  



// const library = {  
//     name: "City Library",  
//     books: [],  

//     addBook(title, author) {  
//         const newBook = {  
//             title: title,  
//             author: author,  
//             isAvailable: true,  
//         };  
//         this.books.push(newBook);  
//     },  

//     removeBook(title) {  
//         this.books = this.books.filter(book => book.title !== title);  
//     },  

//     listAvailableBooks() {  
//         return this.books.filter(book => book.isAvailable);  
//     },  

//     listAllBooks() {  
//         this.books.forEach(book => {  
//             console.log(`${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Not Available"}`);  
//         });  
//     }  
// };  

// // Пример использования:  
// library.addBook("1984", "George Orwell");  
// library.addBook("To Kill a Mockingbird", "Harper Lee");  
// library.listAllBooks();  
// library.removeBook("1984");  
// library.listAllBooks();  


function countSheeps(sheep) {  
    // Инициализируем счетчик присутствующих овец  
    let count = 0;  

    // Проверяем, является ли sheep массивом  
    if (Array.isArray(sheep)) {  
        // Проходим по каждому элементу массива  
        for (let i = 0; i < sheep.length; i++) {  
            // Проверяем, является ли текущий элемент true  
            if (sheep[i] === true) {  
                count++;  // Увеличиваем счетчик, если элемент true  
            }  
            // Дополнительно можно обрабатывать недопустимые значения, например:  
            // if (sheep[i] === null || sheep[i] === undefined) {  
            //     console.log(`Элемент на индексе ${i} недопустим`);  
            // }  
        }  
    }  

    return count;  // Возвращаем общее количество присутствующих овец  
}  

// Пример использования:  
const sheepArray = [  
    true,  true,  true,  false,  
    true,  true,  true,  true,  
    true,  false, true,  false,  
    true,  false, false, true,  
    true,  true,  true,  true,  
    false, false, true,  true  
];  

console.log(countSheeps(sheepArray)); // Вывод: 17  