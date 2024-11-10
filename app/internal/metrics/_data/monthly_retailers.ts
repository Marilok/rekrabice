import { data as monthlyLostRetailers } from "./monthly_lost_retailers";
import { data as monthlyNewRetailers } from "./monthly_new_reatailers";

const totalRetailers: { [year: string]: number } = {};
export const data = monthlyNewRetailers.map((newRetailers, index) => {
  const lostRetailers = monthlyLostRetailers[index];
  // @ts-expect-error
  const result: { month: string; [year: string]: number } = {
    month: newRetailers.month,
  };

  Object.keys(newRetailers).forEach((year) => {
    if (year !== "month") {
      if (!totalRetailers[year]) {
        totalRetailers[year] = 0;
      }
      // @ts-expect-error
      totalRetailers[year] += newRetailers[year] - lostRetailers[year];
      result[year] = totalRetailers[year];
    }
  });

  return result;
});
