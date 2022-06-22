// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs/promises");

async function run() {
  try {
    const file = await fs.readFile("./producs.json", "utf-8");
    const data = JSON.parse(file) || [];

    const categories =
      Array.isArray(data.products) &&
      data.products.map((product) => product.category);

    const uniqueCategories = [...new Set(categories)];

    await fs.writeFile("categories.json", JSON.stringify(uniqueCategories));

    console.log("Categorías creadas con éxito!");
  } catch (err) {
    console.log(err.message);
  }
}

(async () => {
  await run();
})();
