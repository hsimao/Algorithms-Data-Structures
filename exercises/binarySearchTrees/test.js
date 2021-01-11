const BinarySearchTree = require("./index.js");

test("Can traverse BFS", () => {
  const treeBFS = new BinarySearchTree();
  // [10, 6, 15, 3, 8, 20]
  /*
          10
        6     15
      3   8     20
*/
  treeBFS.insert(10);
  treeBFS.insert(6);
  treeBFS.insert(15);
  treeBFS.insert(3);
  treeBFS.insert(8);
  treeBFS.insert(20);

  expect(treeBFS.BFS()).toEqual([10, 6, 15, 3, 8, 20]);
});
