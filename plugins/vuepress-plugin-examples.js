const fs = require("fs");
const { join, extname, basename } = require("path");
module.exports = {
  name: "vuepress-plugin-examples",

  extendsPageData(page) {
    if (!page.filePath) {
      return;
    }

    const exampleDirPath = join(page.filePath, "..", "examples");
    const examples = {};
    try {
      const exampleDirs = fs.readdirSync(exampleDirPath, {
        withFileTypes: true,
      });
      exampleDirs.forEach((exampleDir) => {
        if (exampleDir.isDirectory()) {
          const dirname = exampleDir.name;
          const examplePath = join(exampleDirPath, dirname);
          const exampleFiles = fs
            .readdirSync(examplePath)
            .map((name) => {
              return [
                name,
                fs.readFileSync(join(examplePath, name), {
                  encoding: "utf-8",
                }),
              ];
            })
            .filter(([, code]) => code.trim().length > 0)
            .sort((a, b) => {
              const aType = extname(a[0]);
              const bType = extname(b[0]);
              const aName = basename(a[0], aType);
              const bName = basename(b[0], bType);

              if (aName === "App" && aType === ".vue") return -1;
              if (bName === "App" && bType === ".vue") return 1;

              if (aType !== bType)
                return aType === ".vue" || aType === ".html" ? -1 : 1;
              return aName < bName ? -1 : 1;
            });

          examples[dirname] = {
            files: Object.fromEntries(exampleFiles),
            main: exampleFiles[0][0],
          };
        }
      });
    } catch (e) {
      return {
        examples,
      };
    }

    return {
      examples,
    };
  },
};
