import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // Adicionando as regras de qualidade e arquitetura no padrão Next 16
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      
      // REGRA DE RESTRIÇÃO DE ARQUITETURA (Esqueleto preparado para expandir)
      "no-restricted-imports": ["error", {
        "patterns": [{
          "group": ["@/components/ui/**"],
          "importNames": ["*"],
          // "message": "Componentes de UI puros não podem importar regras de negócio de camadas superiores."
        }]
      }]
    },
  }
]);

export default eslintConfig;