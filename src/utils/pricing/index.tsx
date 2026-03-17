export type PlanFeature = {
    name: string;
}
export type CurrencyCode = "INR" | "USD";

export type RegionalPrice = {
    currency: CurrencyCode;
    monthly: number | "custom";
    yearly: number | "custom";
};
export type PlanDetails = {
    id: number;
    name: string;
    prices: RegionalPrice[];
    description?: string;
    features?: PlanFeature[]
    category?: string;
        featureLine?: string;
}

export const PLANS: PlanDetails[] = [
    {
        id: 1,
        name: "Trust",
        category:"Free",
       description: "",
                featureLine:"Key features ",
        prices: [
            {
                currency: "INR",
                monthly: 9999,
                yearly: 0,
            },
            {
                currency: "USD",
                monthly: 0,
                yearly: 0,
            },
        ],
        features: [
            {
                name: "Includes 6 user"
            },
            {
                name: "2% Per Booking"
            },
            {
                name: "Up to 65 Package Bookings / Month"
            },
        ]
    },
    {
        id: 2,
        name: " agency",
        category:"agency",
                featureLine:"Everything in Free, plus:",
  description: "",
        prices: [
            {
                currency: "INR",
                monthly: 19999,
                yearly: 60000
            },
            {
                currency: "USD",
                monthly: 200,
                yearly: 1000
            }
        ],
        features: [
            {
                name: "upto 20 users"
            },
            {
                name: "2% Per Booking"
            },
            {
                name: "Unlimited Package Bookings"
            },
        ]
    }, {
        id: 3,
        name: "Enterprise",
        category:"Enterprise",
        description: "",
        featureLine:"Everything in agency, plus:",
        features:[
            {
                name: "Custom Requirements"
            },
        ],
        prices: [
            {
                currency: "INR",
                monthly: "custom",
                yearly: "custom"
            },
            {
                currency: "USD",
                monthly: "custom",
                yearly: "custom"
            }
        ]
    }
]


export function resolvePrice(
    plan: PlanDetails,
    billing: "monthly" | "yearly",
    currency: CurrencyCode
) {
    const regional = plan.prices.find(p => p.currency === currency);

    if (!regional) {
        throw new Error(`Pricing not configured for ${currency}`);
    }

    return regional[billing];
}

export function formatPrice(amount: number, currency: CurrencyCode) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}