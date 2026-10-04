const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

const step1 = profile.getInfo();
console.log(step1);

profile.changeUsername("Marco");
const step2 = profile.getInfo();
console.log(step2);

profile.updatePlayTime(20);
const step3 = profile.getInfo();
console.log(step3);

document.getElementById("task-3-output").innerHTML = `
  <p>${step1}</p>
  <p>${step2}</p>
  <p>${step3}</p>
`;