// Необходимо реализовать метод removeResource в объекте game, который будет уменьшать количество ресурсов в зависимости от переданных параметров.



// resource (строка) — тип ресурса (gold, lumber и т.д.).
// amount (число) — количество ресурса, которое нужно убрать.


// Если ресурс существует, метод должен проверять, достаточно ли количества ресурса для уменьшения. 
// Если количество ресурсов меньше, чем amount, выводить сообщение "Not enough resources", 
// иначе уменьшать количество приростов на переданное значение amount и выводить сообщение с новым количеством.


const game = {  
    resources: {  
      gold: 250,  
      lumber: 100,  
    },  
    removeResource(resource, amount) {
        if (this.resourses.hasOwnProperty(resource)) {
            console.log();
            
        } else {
            console.log("Not enough resources");
            
        }


    }

  };  
  
  // Примеры использования метода:  
  // game.removeResource("gold", 50);   // New amount: 200  
  // game.removeResource("lumber", 120); // Not enough resources  
  // game.removeResource("stone", 10);   // Invalid resource  32