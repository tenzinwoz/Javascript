/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
  }

  // 0 = unvisited, 1 = visiting, 2 = done
  const state = new Array(numCourses).fill(0);

  function hasCycle(node) {
    if (state[node] === 1) return true;
    if (state[node] === 2) return false;
    state[node] = 1;
    for (const next of graph[node]) {
      if (hasCycle(next)) return true;
    }
    state[node] = 2;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  return true;
}

const assert = require("assert");
assert.strictEqual(canFinish(2, [[1, 0]]), true);
assert.strictEqual(canFinish(2, [[1, 0], [0, 1]]), false);
assert.strictEqual(canFinish(1, []), true);
console.log("course-schedule: all examples pass");

module.exports = { canFinish };
