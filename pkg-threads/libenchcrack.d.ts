/* tslint:disable */
/* eslint-disable */
/**
* @param {number} num_threads
* @returns {Promise<any>}
*/
export function initThreadPool(num_threads: number): Promise<any>;
/**
* @param {number} receiver
*/
export function wbg_rayon_start_worker(receiver: number): void;
/**
*/
export enum Version {
  V1_8,
  V1_9,
  V1_11,
  V1_11_1,
  V1_13,
  V1_14,
  V1_14_3,
  V1_16,
}
/**
*/
export enum Material {
  Netherite,
  Diamond,
  Golden,
  Iron,
  Chainmail,
  Fire,
  Turtle,
  Leather,
  Stone,
  Wooden,
}
/**
*/
export enum Item {
  LeatherHelmet,
  LeatherChestplate,
  LeatherLeggings,
  LeatherBoots,
  IronHelmet,
  IronChestplate,
  IronLeggings,
  IronBoots,
  ChainmailHelmet,
  ChainmailChestplate,
  ChainmailLeggings,
  ChainmailBoots,
  GoldenHelmet,
  GoldenChestplate,
  GoldenLeggings,
  GoldenBoots,
  DiamondHelmet,
  DiamondChestplate,
  DiamondLeggings,
  DiamondBoots,
  WoodenSword,
  StoneSword,
  IronSword,
  GoldenSword,
  DiamondSword,
  WoodenPickaxe,
  StonePickaxe,
  IronPickaxe,
  GoldenPickaxe,
  DiamondPickaxe,
  WoodenAxe,
  StoneAxe,
  IronAxe,
  GoldenAxe,
  DiamondAxe,
  WoodenShovel,
  StoneShovel,
  IronShovel,
  GoldenShovel,
  DiamondShovel,
  WoodenHoe,
  StoneHoe,
  IronHoe,
  GoldenHoe,
  DiamondHoe,
  CarrotOnAStick,
  FishingRod,
  FlintAndSteel,
  Shears,
  Bow,
  Book,
  Pumpkin,
  Skull,
  Elytra,
  Shield,
  Trident,
  TurtleHelmet,
  Crossbow,
  NetheriteHelmet,
  NetheriteChestplate,
  NetheriteLeggings,
  NetheriteBoots,
  NetheriteSword,
  NetheritePickaxe,
  NetheriteAxe,
  NetheriteShovel,
  NetheriteHoe,
}
/**
*/
export enum Enchantment {
  Protection,
  FireProtection,
  FeatherFalling,
  BlastProtection,
  ProjectileProtection,
  Respiration,
  AquaAffinity,
  Thorns,
  DepthStrider,
  Sharpness,
  Smite,
  BaneOfArthropods,
  Knockback,
  FireAspect,
  Looting,
  Efficiency,
  SilkTouch,
  Unbreaking,
  Fortune,
  Power,
  Punch,
  Flame,
  Infinity,
  LuckOfTheSea,
  Lure,
  FrostWalker,
  Mending,
  BindingCurse,
  VanishingCurse,
  Sweeping,
  Loyalty,
  Impaling,
  Riptide,
  Channeling,
  Multishot,
  QuickCharge,
  Piercing,
}
/**
*/
export class Cracker {
  free(): void;
/**
*/
  constructor();
/**
*/
  reset(): void;
/**
* @param {EnchantmentTableInfo} info
* @param {EnchantmentTableInfo} info2
*/
  firstInput(info: EnchantmentTableInfo, info2: EnchantmentTableInfo): void;
/**
* @param {EnchantmentTableInfo} info
*/
  addInput(info: EnchantmentTableInfo): void;
/**
* @param {number} x
* @returns {boolean}
*/
  contains(x: number): boolean;
/**
* @returns {number}
*/
  readonly possibleSeeds: number;
/**
* @returns {number}
*/
  readonly seed: number;
}
/**
*/
export class EnchantmentInstance {
  free(): void;
/**
* @param {number} enchantment
* @param {number} level
*/
  constructor(enchantment: number, level: number);
/**
*/
  enchantment: number;
/**
*/
  level: number;
}
/**
*/
export class EnchantmentTableInfo {
  free(): void;
/**
* @param {number} shelves
* @param {number} slot1
* @param {number} slot2
* @param {number} slot3
*/
  constructor(shelves: number, slot1: number, slot2: number, slot3: number);
}
/**
*/
export class Manipulator {
  free(): void;
/**
* @param {number} seed1
* @param {number} seed2
*/
  constructor(seed1: number, seed2: number);
/**
* @param {number} seed1
* @param {number} seed2
* @returns {boolean}
*/
  changeSeed(seed1: number, seed2: number): boolean;
/**
* @param {number} item
* @param {number} max_shelves
* @param {number} player_level
* @param {number} version
* @returns {Int32Array | undefined}
*/
  simulate(item: number, max_shelves: number, player_level: number, version: number): Int32Array | undefined;
/**
* @param {number} times_needed
* @param {number} chosen_slot
* @param {number} player_level
* @returns {number}
*/
  updateSeed(times_needed: number, chosen_slot: number, player_level: number): number;
/**
* @param {number} item
* @param {EnchantmentInstance} ench
*/
  updateItem(item: number, ench: EnchantmentInstance): void;
/**
* @param {number} item
*/
  reset(item: number): void;
/**
* @returns {Uint8Array}
*/
  readonly playerSeed: Uint8Array;
}
/**
*/
export class Utilities {
  free(): void;
/**
* @param {number} mat
* @returns {number}
*/
  static materialIntroducedVersion(mat: number): number;
/**
* @param {number} item
* @returns {number}
*/
  static itemIntroducedVersion(item: number): number;
/**
* @param {number} ench
* @returns {number}
*/
  static enchantmentIntroducedVersion(ench: number): number;
/**
* @param {number} ench
* @param {number} item
* @returns {number}
*/
  static getMaxLevelInTable(ench: number, item: number): number;
/**
* @param {number} ench1
* @param {number} ench2
* @param {number} version
* @returns {boolean}
*/
  static areEnchantmentsCompatible(ench1: number, ench2: number, version: number): boolean;
/**
* @param {number} item
* @returns {Uint8Array}
*/
  static getEnchantments(item: number): Uint8Array;
/**
* @param {number} ench
* @returns {boolean}
*/
  static isTreasure(ench: number): boolean;
/**
* @param {number} material
* @returns {Uint8Array}
*/
  static getItems(material: number): Uint8Array;
}
/**
*/
export class wbg_rayon_PoolBuilder {
  free(): void;
/**
* @returns {string}
*/
  mainJS(): string;
/**
* @returns {number}
*/
  numThreads(): number;
/**
* @returns {number}
*/
  receiver(): number;
/**
*/
  build(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly __wbg_enchantmentinstance_free: (a: number) => void;
  readonly __wbg_get_enchantmentinstance_enchantment: (a: number) => number;
  readonly __wbg_set_enchantmentinstance_enchantment: (a: number, b: number) => void;
  readonly __wbg_get_enchantmentinstance_level: (a: number) => number;
  readonly __wbg_set_enchantmentinstance_level: (a: number, b: number) => void;
  readonly enchantmentinstance_new: (a: number, b: number) => number;
  readonly __wbg_enchantmenttableinfo_free: (a: number) => void;
  readonly enchantmenttableinfo_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_cracker_free: (a: number) => void;
  readonly cracker_new: () => number;
  readonly cracker_reset: (a: number) => void;
  readonly cracker_possible_seeds: (a: number) => number;
  readonly cracker_seed: (a: number) => number;
  readonly cracker_firstInput: (a: number, b: number, c: number) => void;
  readonly cracker_addInput: (a: number, b: number) => void;
  readonly cracker_contains: (a: number, b: number) => number;
  readonly __wbg_manipulator_free: (a: number) => void;
  readonly manipulator_new: (a: number, b: number) => number;
  readonly manipulator_changeSeed: (a: number, b: number, c: number) => number;
  readonly manipulator_player_seed: (a: number) => number;
  readonly manipulator_simulate: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly manipulator_updateSeed: (a: number, b: number, c: number, d: number) => number;
  readonly manipulator_updateItem: (a: number, b: number, c: number) => void;
  readonly manipulator_reset: (a: number, b: number) => void;
  readonly __wbg_utilities_free: (a: number) => void;
  readonly utilities_materialIntroducedVersion: (a: number) => number;
  readonly utilities_itemIntroducedVersion: (a: number) => number;
  readonly utilities_enchantmentIntroducedVersion: (a: number) => number;
  readonly utilities_getMaxLevelInTable: (a: number, b: number) => number;
  readonly utilities_areEnchantmentsCompatible: (a: number, b: number, c: number) => number;
  readonly utilities_getEnchantments: (a: number) => number;
  readonly utilities_isTreasure: (a: number) => number;
  readonly utilities_getItems: (a: number) => number;
  readonly __wbg_wbg_rayon_poolbuilder_free: (a: number) => void;
  readonly wbg_rayon_poolbuilder_mainJS: (a: number) => number;
  readonly wbg_rayon_poolbuilder_numThreads: (a: number) => number;
  readonly wbg_rayon_poolbuilder_receiver: (a: number) => number;
  readonly wbg_rayon_poolbuilder_build: (a: number) => void;
  readonly initThreadPool: (a: number) => number;
  readonly wbg_rayon_start_worker: (a: number) => void;
  readonly memory: WebAssembly.Memory;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
* @param {WebAssembly.Memory} maybe_memory
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>, maybe_memory?: WebAssembly.Memory): Promise<InitOutput>;
