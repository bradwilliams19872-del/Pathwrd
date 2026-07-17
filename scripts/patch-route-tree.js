#!/usr/bin/env bun
/**
 * Post-build patch for routeTree.gen.ts — makes /professions/$slug/roadmap
 * a flat sibling route under ProfessionsRoute instead of a nested child of
 * ProfessionsSlugRoute.
 *
 * The TanStack Router code generator nests based on URL path segments even when
 * the flat-route dot convention ($slug.roadmap.tsx) is used, so we fix it here.
 */
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const target = join(import.meta.dir, "..", "src", "routeTree.gen.ts");
let src = readFileSync(target, "utf-8");

// 1. Fix getParentRoute for the roadmap route
src = src.replace(
  /(ProfessionsSlugRoadmapRouteImport\.update\(\{[^}]*getParentRoute:\s*\(\)\s*=>\s*)ProfessionsSlugRoute/,
  "$1ProfessionsRoute",
);

// 2. Fix parentRoute in the declare module block for the roadmap
src = src.replace(
  /(\/professions\/\$slug\/roadmap['"]:\s*\{[^}]*parentRoute:\s*typeof\s+)ProfessionsSlugRoute/,
  "$1ProfessionsRoute",
);

// 3. Remove roadmap from ProfessionsSlugRouteChildren
src = src.replace(
  /interface ProfessionsSlugRouteChildren \{\s*ProfessionsSlugRoadmapRoute: typeof ProfessionsSlugRoadmapRoute\s*\}/,
  "interface ProfessionsSlugRouteChildren {}",
);
src = src.replace(
  /const ProfessionsSlugRouteChildren: ProfessionsSlugRouteChildren = \{\s*ProfessionsSlugRoadmapRoute: ProfessionsSlugRoadmapRoute,\s*\}/,
  "const ProfessionsSlugRouteChildren: ProfessionsSlugRouteChildren = {}",
);

// 4. Add roadmap to ProfessionsRouteChildren (if not already there)
if (!src.includes("ProfessionsSlugRoadmapRoute: typeof ProfessionsSlugRoadmapRoute")) {
  src = src.replace(
    /interface ProfessionsRouteChildren \{\s*ProfessionsSlugRoute: typeof ProfessionsSlugRouteWithChildren\s*\}/,
    "interface ProfessionsRouteChildren {\n  ProfessionsSlugRoute: typeof ProfessionsSlugRouteWithChildren\n  ProfessionsSlugRoadmapRoute: typeof ProfessionsSlugRoadmapRoute\n}",
  );
}
if (!src.includes("ProfessionsSlugRoadmapRoute: ProfessionsSlugRoadmapRoute,")) {
  src = src.replace(
    /const ProfessionsRouteChildren: ProfessionsRouteChildren = \{\s*ProfessionsSlugRoute: ProfessionsSlugRouteWithChildren,\s*\}/,
    "const ProfessionsRouteChildren: ProfessionsRouteChildren = {\n  ProfessionsSlugRoute: ProfessionsSlugRouteWithChildren,\n  ProfessionsSlugRoadmapRoute: ProfessionsSlugRoadmapRoute,\n}",
  );
}

// 5. Update FileRoutesByFullPath/To/ById: ProfessionsSlugRouteWithChildren → ProfessionsSlugRoute
//    for the $slug entries (not the roadmap entries)
src = src.replace(
  /('\/professions\/\$slug': typeof )ProfessionsSlugRouteWithChildren/g,
  "$1ProfessionsSlugRoute",
);

writeFileSync(target, src);
console.log("✅ Patched routeTree.gen.ts: roadmap is now a flat sibling route");
