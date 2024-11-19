const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  if (err) return;
  const result1 = data1;
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    if (err) return;
    const result2 = data2;
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      if (err) return;
      const result3 = data3;
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        if (err) return;
        const hobbies = data4
          .trim()
          .replace(/"/g, "")
          .slice(1, -1)
          .split(",")
          .map((hobby) => hobby.trim());
        console.log(
          `${result1} ${result2} is ${result3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`
        );
      });
    });
  });
});
