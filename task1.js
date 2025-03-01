/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:


2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
*/

const game = {
    resources: {
      gold: 250,
      lumber: 100,
    },
    addResource(resource, amount) {
      if (this.resources.hasOwnProperty(resource)) {  
        // Если ресурс существует, добавляем к нему количество  
        this.resources[resource] += amount;  
        console.log(`${amount} ${resource} added. New amount: ${this.resources[resource]}`);  
      } else {  
        console.log("Invalid resource");  
      }  
    }  
  }
  