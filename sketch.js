let x;
let y;
let d;
let r;
let s;
let v;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let x = map(mouseX, 0, width, 0, 255);
  let y = map(mouseY, 0, height, 0, 255);
  background(0);
  noStroke();
  t = millis() / 2000;
  d = 10;
  r = 2;
  s = 18;
  v = 1;

  n1 = PI / 2;
  r = r + s;
  fill(x, 0, y);
  for (i = 0; i <= 3; i++)
    ellipse(
      200 + r * cos(t * v + n1 * i),
      200 + r * sin(t * v + n1 * i),
      10,
      10
    );

  n2 = PI / 4;
  r = r + s;
  fill((x * 14) / 15, 0, (y * 14) / 15);
  for (i = 0; i <= 7; i++)
    ellipse(
      200 + r * cos(t * v + n2 * i),
      200 + r * sin(t * v + n2 * i),
      10,
      10
    );

  n3 = PI / 6;
  r = r + s;
  fill((x * 13) / 15, 0, (y * 13) / 15);
  for (i = 0; i <= 11; i++)
    ellipse(
      200 + r * cos(t * v + n3 * i),
      200 + r * sin(t * v + n3 * i),
      10,
      10
    );

  n4 = PI / 8;
  r = r + s;
  fill((x * 4) / 5, 0, (y * 4) / 5);
  for (i = 0; i <= 15; i++)
    ellipse(
      200 + r * cos(t * v + n4 * i),
      200 + r * sin(t * v + n4 * i),
      10,
      10
    );

  n5 = PI / 10;
  r = r + s;
  fill((x * 11) / 15, 0, (y * 11) / 15);
  for (i = 0; i <= 19; i++)
    ellipse(
      200 + r * cos(t * v + n5 * i),
      200 + r * sin(t * v + n5 * i),
      10,
      10
    );

  n6 = PI / 12;
  r = r + s;
  fill((x * 2) / 3, 0, (y * 2) / 3);
  for (i = 0; i <= 23; i++)
    ellipse(
      200 + r * cos(t * v + n6 * i),
      200 + r * sin(t * v + n6 * i),
      10,
      10
    );

  n7 = PI / 14;
  r = r + s;
  fill((x * 3) / 5, 0, (y * 3) / 5);
  for (i = 0; i <= 27; i++)
    ellipse(
      200 + r * cos(t * v + n7 * i),
      200 + r * sin(t * v + n7 * i),
      10,
      10
    );

  n8 = PI / 16;
  r = r + s;
  fill((x * 8) / 15, 0, (y * 8) / 15);
  for (i = 0; i <= 31; i++)
    ellipse(
      200 + r * cos(t * v + n8 * i),
      200 + r * sin(t * v + n8 * i),
      10,
      10
    );

  n9 = PI / 18;
  r = r + s;
  fill((x * 7) / 15, 0, (y * 7) / 15);
  for (i = 0; i <= 35; i++)
    ellipse(
      200 + r * cos(t * v + n9 * i),
      200 + r * sin(t * v + n9 * i),
      10,
      10
    );

  n10 = PI / 20;
  r = r + s;
  fill((x * 2) / 5, 0, (y * 2) / 5);
  for (i = 0; i <= 39; i++)
    ellipse(
      200 + r * cos(t * v + n10 * i),
      200 + r * sin(t * v + n10 * i),
      10,
      10
    );

  n11 = PI / 22;
  r = r + s;
  fill(x / 3, 0, y / 3);
  for (i = 0; i <= 43; i++)
    ellipse(
      200 + r * cos(t * v + n11 * i),
      200 + r * sin(t * v + n11 * i),
      10,
      10
    );

  n12 = PI / 24;
  r = r + s;
  fill((x * 4) / 15, 0, (y * 4) / 15);
  for (i = 0; i <= 47; i++)
    ellipse(
      200 + r * cos(t * v + n12 * i),
      200 + r * sin(t * v + n12 * i),
      10,
      10
    );

  n13 = PI / 28;
  r = r + s;
  fill(x / 5, 0, y / 5);
  for (i = 0; i <= 51; i++)
    ellipse(
      200 + r * cos(t * v + n13 * i),
      200 + r * sin(t * v + n13 * i),
      10,
      10
    );

  n14 = PI / 32;
  r = r + s;
  fill((x * 2) / 15, 0, (y * 2) / 15);
  for (i = 0; i <= 55; i++)
    ellipse(
      200 + r * cos(t * v + n14 * i),
      200 + r * sin(t * v + n14 * i),
      10,
      10
    );

  n15 = PI / 36;
  r = r + s;
  fill(x / 15, 0, y / 15);
  for (i = 0; i <= 59; i++)
    ellipse(
      200 + r * cos(t * v + n15 * i),
      200 + r * sin(t * v + n15 * i),
      10,
      10
    );
}
