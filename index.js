let score_el_1, score_el_2;

let scores_1 = new Array(),
  scores_2 = new Array();

let score = 0,
  count = 0,
  reset_check = 0,
  reset_choice = 0,
  i = (j = -1);

function enable_disable_action() {
  if (i < 0) document.getElementById("undo-btn").style.opacity = "33%";
  else document.getElementById("undo-btn").style.opacity = "100%";

  if (i < count - 1) document.getElementById("redo-btn").style.opacity = "100%";
  else document.getElementById("redo-btn").style.opacity = "33%";
}

function add_points(choice) {
  i += 1;
  reset_check = 0;

  // Adding points to score
  if (choice <= 3) {
    score_el_1 = document.getElementById("score-el-1");
    score = Number(score_el_1.textContent) + choice;
    score_el_2 = document.getElementById("score-el-2");

    // Keeping track of points
    scores_1[i] = score;
    scores_2[i] = Number(score_el_2.textContent);

    // Setting Scores
    score_el_1.textContent = scores_1[i];
    score_el_2.textContent = scores_2[i];
  } else {
    score_el_2 = document.getElementById("score-el-2");
    score = Number(score_el_2.textContent) + (choice - 3);
    score_el_1 = document.getElementById("score-el-1");

    // Keeping track of points
    scores_2[i] = score;
    scores_1[i] = Number(score_el_1.textContent);

    // Setting Scores
    score_el_1.textContent = scores_1[i];
    score_el_2.textContent = scores_2[i];
  }
  count = i + 1;

  console.log(i, count);
  document.getElementById("reset-btn").style.opacity = "100%";
  enable_disable_action();
}

function reset(choice) {
  score = 0;
  i = -1;

  document.getElementById("score-el-1").textContent = 0;
  document.getElementById("score-el-2").textContent = 0;

  if (choice == 0) {
    reset_check = 1;
    count = 0;

    scores_1 = new Array();
    scores_2 = new Array();

    document.getElementById("reset-btn").style.opacity = "33%";
    enable_disable_action();
  }

  console.log(i, count);
}

function undo() {
  if (reset_check == 1) return;

  if (i <= 0) reset(1);
  else {
    // Go to previous set of values
    i -= 1;
    console.log(scores_1[i]);
    document.getElementById("score-el-1").textContent = scores_1[i];
    document.getElementById("score-el-2").textContent = scores_2[i];
  }
  console.log("Hi");
  enable_disable_action();
}

function redo() {
  if (reset_check == 1 || i == count - 1) return;

  if (i < count) {
    // Go to previous set of values
    i += 1;
    console.log(scores_1[i]);
    document.getElementById("score-el-1").textContent = scores_1[i];
    document.getElementById("score-el-2").textContent = scores_2[i];
  }

  enable_disable_action();
}
