import { growthStatisticsAsOf, petGrowthProfiles } from "@/lib/site-data";

export type PetGrowthProfile = (typeof petGrowthProfiles)[number];

export type PetGrowthStats = ReturnType<typeof getPetGrowthStats>;

const DAY_MS = 24 * 60 * 60 * 1000;
const DAYS_PER_MONTH = 30;

function parseDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function diffDays(start: string, end: string) {
  return Math.max(0, Math.round((parseDate(end).getTime() - parseDate(start).getTime()) / DAY_MS));
}

function diffFullMonths(start: string, end: string) {
  const startDate = parseDate(start);
  const endDate = parseDate(end);
  let months =
    (endDate.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
    (endDate.getUTCMonth() - startDate.getUTCMonth());

  if (endDate.getUTCDate() < startDate.getUTCDate()) {
    months -= 1;
  }

  return Math.max(0, months);
}

function round(value: number, digits = 1) {
  return Number(value.toFixed(digits));
}

export function formatAge(birthday: string, asOf = growthStatisticsAsOf) {
  const months = diffFullMonths(birthday, asOf);

  if (months >= 12) {
    const years = Math.floor(months / 12);
    const restMonths = months % 12;
    return restMonths > 0 ? `${years}岁${restMonths}个月+` : `${years}岁+`;
  }

  return `${months}个月+`;
}

export function getPetGrowthStats(profile: PetGrowthProfile, asOf = growthStatisticsAsOf) {
  const homeDays = diffDays(profile.arrivalDate, asOf);
  const gainKg = profile.currentWeightKg - profile.initialWeightKg;
  const dailyGainG = homeDays > 0 ? (gainKg * 1000) / homeDays : 0;
  const monthlyGainKg = homeDays > 0 ? (gainKg / homeDays) * DAYS_PER_MONTH : 0;
  const growthPercent = profile.initialWeightKg > 0 ? (gainKg / profile.initialWeightKg) * 100 : 0;

  return {
    name: profile.name,
    species: profile.species,
    birthday: profile.birthday,
    arrivalDate: profile.arrivalDate,
    currentAge: formatAge(profile.birthday, asOf),
    homeDays,
    currentWeightKg: profile.currentWeightKg,
    initialWeightKg: profile.initialWeightKg,
    gainKg: round(gainKg, 1),
    monthlyGainKg: round(monthlyGainKg, 2),
    dailyGainG: Math.round(dailyGainG),
    growthPercent: round(growthPercent, 1),
    weightRecords: profile.weightRecords
  };
}

export function getAllPetGrowthStats(asOf = growthStatisticsAsOf) {
  return petGrowthProfiles.map((profile) => getPetGrowthStats(profile, asOf));
}

export function getGrowthComparison(asOf = growthStatisticsAsOf) {
  const stats = getAllPetGrowthStats(asOf);
  const baobao = stats.find((item) => item.name === "豹豹");
  const huhu = stats.find((item) => item.name === "虎虎");

  if (!baobao || !huhu) {
    throw new Error("Missing growth stats for 虎虎 or 豹豹.");
  }

  return {
    baobao,
    huhu,
    weightDiffKg: round(Math.abs(baobao.currentWeightKg - huhu.currentWeightKg), 1),
    totalHomeDays: baobao.homeDays + huhu.homeDays,
    totalGainKg: round(baobao.gainKg + huhu.gainKg, 1),
    totalCurrentWeightKg: round(baobao.currentWeightKg + huhu.currentWeightKg, 1),
    combinedDailyGainG: baobao.dailyGainG + huhu.dailyGainG
  };
}
