/// <reference path="utils.d.ts" />
/// <reference path="path-finder.d.ts" />
/// <reference path="constants.d.ts" />
/// <reference path="prototypes/index.d.ts" />

declare module "game" {
  export * as utils from "game/utils";
  export * as pathFinder from "game/path-finder";

  export * as prototypes from "game/prototypes";

  export * as constants from "game/constants";

  export const arenaInfo: {
    /**
     * "Capture the Flag"
     */
    name: string;
    level: number;
    /**
     * "alpha"
     */
    season: string;
  };

  export function createConstructionSite(x: number, y: number, structurePrototype: STRUCTURE_PROTOTYPES);
}