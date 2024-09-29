
// Exercise 1 & 2: Shape Types
type Circle = {
  kind: 'circle';
  radius: number;
};

type Square = {
  kind: 'square';
  sideLength: number;
};

type Shape = Circle | Square;

// Exercise 1: Destructuring a Discriminated Union
function calculateAreaWithDestructuring1(shape: Shape): number {
  if (shape.kind === 'circle') {
    const { radius } = shape;
    return Math.PI * radius * radius;
  } else {
    const { sideLength } = shape;
    return sideLength * sideLength;
  }
}

// Test for Exercise 1
const circle1: Circle = { kind: 'circle', radius: 5 };
const square1: Square = { kind: 'square', sideLength: 4 };

console.log('Exercise 1 - Circle Area:', calculateAreaWithDestructuring(circle));
console.log('Exercise 1 - Square Area:', calculateAreaWithDestructuring(square));

// Exercise 2: Narrowing a Discriminated Union with a Switch Statement
function calculateAreaWithSwitch1(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
    case 'square':
      return shape.sideLength * shape.sideLength;
  }
}

// Test for Exercise 2
console.log('Exercise 2 - Circle Area:', calculateAreaWithSwitch(circle));
console.log('Exercise 2 - Square Area:', calculateAreaWithSwitch(square));

// Exercise 3: Discriminated Tuples
type User = {
  email: string;
  id: number;
  name: string;
};

type APIResponse = ['success', User[]] | ['error', string];

async function fetchData1(): Promise<APIResponse> {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      return ['error', 'An error occurred'];
    }

    const data: User[] = await response.json();
    return ['success', data];
  } catch (error) {
    return ['error', 'An error occurred'];
  }
}

// Test for Exercise 3
async function testFetchData1() {
  const [status, value] = await fetchData();

  if (status === 'success') {
    console.log('Exercise 3 - Success:', value);
  } else {
    console.error('Exercise 3 - Error:', value);
  }
}

testFetchData1();

// Exercise 4: Handling Defaults with a Discriminated Union
type CircleWithOptionalKind = {
  kind?: 'circle';
  radius: number;
};

type ShapeWithOptionalCircle = CircleWithOptionalKind | Square;

function calculateAreaWithDefault2(shape: ShapeWithOptionalCircle): number {
  if (shape.kind === 'square') {
    return shape.sideLength * shape.sideLength;
  } else {
    return Math.PI * shape.radius * shape.radius;
  }
}

// Test for Exercise 4
const defaultCircle4 = { radius: 5 };
const explicitCircle4: CircleWithOptionalKind = { kind: 'circle', radius: 5 };
const squareExercise4: Square = { kind: 'square', sideLength: 4 };

console.log('Exercise 4 - Default Circle Area:', calculateAreaWithDefault(defaultCircle4));
console.log('Exercise 4 - Explicit Circle Area:', calculateAreaWithDefault(explicitCircle4));
console.log('Exercise 4 - Square Area:', calculateAreaWithDefault(squareExercise4));

// Run all tests
console.log('Run this file to see the console output for each exercise.');
