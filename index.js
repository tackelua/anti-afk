const robot = require("robotjs");

const intervalInMinute = (process.argv[2] || 5) * 1000 * 60;

function* range(start, stop, step = 1) {
  if (stop == null) {
    // one param defined
    stop = start;
    start = 0;
  }

  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    yield i;
  }
}

let count = 0;

function moveMouse() {
  robot.setMouseDelay(2);
  const { x, y } = robot.getMousePos();

  console.log("\n[", count++, "]", new Date().toLocaleTimeString());
  for (const i of range(-1, 1)) {
    for (const j of range(-1, 1)) {
      const _x = x + i;
      const _y = y + j;
      //   console.log(_x, _y);
      robot.moveMouse(_x, _y);
    }
  }
}

moveMouse();
setInterval(moveMouse, intervalInMinute);
