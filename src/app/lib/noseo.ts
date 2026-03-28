export const getRobots = () => {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

  return isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false };
};