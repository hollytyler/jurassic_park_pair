class Park {

  constructor(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  }

  addDinosaur(dinosaur) {
    this.dinosaurs.push(dinosaur);
  }

  removeDinosaur(dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    if (index !== -1) {
      this.dinosaurs.splice(index, 1);
    }
  }

  findMostPopularDino() {
    let max = 0
    let popularDinoId
    for (let i=0; i < this.dinosaurs.length; i++) {
      if (this.dinosaurs.guestsAttractedPerDay[i] > max)
      popularDinoId[i]
    }
  }
}

module.exports = Park;
