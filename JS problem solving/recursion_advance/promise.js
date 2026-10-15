const ok = (value, ms = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const fail = (err, ms = 300) =>
  new Promise((_, reject) => setTimeout(() => reject(err), ms));

const main = async () => {
  // all — every promise must succeed
  console.log(await Promise.all([ok("A"), ok("B")]));
  // ["A", "B"]

  // allSettled — wait for all, get status of each
  console.log(await Promise.allSettled([ok("A"), fail("err")]));
  // [{ status: "fulfilled", value: "A" }, { status: "rejected", reason: "err" }]

  // race — first to finish (success or fail)
  console.log(await Promise.race([ok("slow", 500), ok("fast", 100)]));
  // "fast"

  // any — first to succeed
  console.log(await Promise.any([fail("err"), ok("yes")]));
  // "yes"

  // resolve
  console.log(await Promise.resolve(42)); // 42
};

main();
